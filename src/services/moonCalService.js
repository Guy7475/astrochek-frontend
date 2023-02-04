import { format, getDaysInYear, getDaysInMonth } from 'date-fns';
import { getMoonTimes, getMoonIllumination, getTimes } from 'suncalc';

export const moonCalService = {
    dateFnsCal,
    // getMoonTimes,
    // buildYear,
    // yearArray,
};

const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// function dateFnsCal(year) {
//     const daysInYear = getDaysInYear(2020)


// }

function dateFnsCal(year, lat, long) {
    const yearCal = [];
    const yearDay = [];
    for (let i = 0; i < monthsOfTheYear.length; i++) {
        const monthToAdd = {};
        const daysInMonth = getDaysInMonth(new Date(year, i));

        monthToAdd.monthName = monthsOfTheYear[i];
        monthToAdd.monthNum = i + 1;
        monthToAdd.numOfDays = daysInMonth;
        monthToAdd.days = [];

        for (let j = 0; j < daysInMonth; j++) {
            const dayToAdd = {};
            dayToAdd.dateLocal = format(new Date(year, i, j + 1), 'dd/MM/yyyy');
            dayToAdd.date = format(new Date(year, i, j + 1), 'yyyy-MM-dd');
            dayToAdd.monthName = monthsOfTheYear[i];
            dayToAdd.monthNum = i;
            dayToAdd.dayName = format(new Date(year, i, j + 1), 'EEE');
            dayToAdd.dayInMonth = j + 1;
            dayToAdd.weekDayIdx = daysOfTheWeek.findIndex(day => day === dayToAdd.dayName);

            const dateObject = new Date(year, dayToAdd.monthNum, dayToAdd.dayInMonth, 1, 1);

            const moonTimes = _getMoonTimes(dateObject, lat, long);

            dayToAdd.moon = {
                times: {
                    rise: null,
                    set: null,
                },
                illum: _getMoonIllum(dateObject),
            };

            // moonrise formatting
            if (moonTimes.rise) {
                dayToAdd.moon.times.rise = format(new Date(moonTimes.rise), "HH:mm");
            } else {
                dayToAdd.moon.times.rise = '00:00';
            }

            // moonset formatting
            if (moonTimes.set) {
                dayToAdd.moon.times.set = format(new Date(moonTimes.set), "HH:mm");
            } else {
                dayToAdd.moon.times.set = '00:00';
            }

            // console.log(dayToAdd.date)
            // console.log(dayToAdd.moon.times)

            const sunTimes = _getSunTimes(dateObject, lat, long);
            dayToAdd.sun = {
                times: {
                    rise: format(new Date(sunTimes.sunrise), "HH:mm"),
                    set: format(new Date(sunTimes.sunset), "HH:mm"),
                }
            };

            monthToAdd.days.push(dayToAdd);
            yearDay.push(dayToAdd);
        }
        yearCal.push(monthToAdd);
    }
    // console.log(yearCal)
    // console.log(yearDay)
    return yearDay;
}

function _getMoonTimes(date, lat, long) {
    return (
        getMoonTimes(
            date,
            lat,
            long,
            
        )
    );
}

function _getMoonIllum(date) {
    return (getMoonIllumination(date));
}

function _getSunTimes(date, lat, long) {
    return (
        getTimes(
            date,
            lat,
            long, 
        )
    );
}
