// import * as dayjs from 'dayjs';
import { format, fromUnixTime, getUnixTime, isToday, isBefore, startOfToday, startOfTomorrow, differenceInWeeks, addWeeks  } from 'date-fns';

export const utilService = {
  checkIfDue,
  todayHtml,
  makeId,
  debounce,
  getRandomInt,
  getRandomColor,
  scssMsg,
  errMsg,
  getLoremIpsum,
  fakeFail,
  loadFromStorage,
  saveToStorage,
  loadFromSessionStorage,
  saveToSessionStorage,
  deleteFromSessionStorage,
  moveArrayItemToNewIndex,
  unixToDate,
  tomorrowHtml,
  isDateToday,
  isBeforeToday,
  weeksPassed,
  getAddedWeeks,
};

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function moveArrayItemToNewIndex(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

function getLoremIpsum(length = 5) {
  const words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ];
  let sentence = '';
  while (length > 0) {
    sentence += words[getRandomInt(0, words.length - 1)] + ' ';
    length--;
  }
  return sentence.trim();
}

function fakeFail() {
  setTimeout(() => {
    return Promise.reject()
  }, 3000);
}

function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

function scssMsg(msg) {
  let elModal = document.querySelector(".success-modal");
  elModal.innerText = msg;
  elModal.style.visibility = 'visible';
  setTimeout(() => {
    elModal.style.visibility = 'hidden';
  }, 1500);
}

function errMsg(msg) {
  let elModal = document.querySelector(".error-modal");
  elModal.innerText = msg;
  elModal.style.visibility = 'visible';
  setTimeout(() => {
    elModal.style.visibility = 'hidden';
  }, 5000);
}

function debounce(func, wait) {
  let timeout;
  console.log(func)
  return function executedFunction(...args) {
    //rest-makes the args to an array
    const later = () => {
      clearTimeout(timeout);
      func(...args); //spread-from array to vars
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

function loadFromSessionStorage(key) {
  var val = sessionStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToSessionStorage(key, val) {
  sessionStorage[key] = JSON.stringify(val);
}

function deleteFromSessionStorage(key) {
  sessionStorage.removeItem(key);
}

function dateToUnix(date) {
  return getUnixTime(new Date(date));
}

function unixToDate(date) {
  return format(new Date(fromUnixTime(date)), 'yyyy-MM-dd');
}

function todayHtml() {
  return format(new Date(startOfToday()), 'yyyy-MM-dd');
}

function tomorrowHtml() {
  return format(new Date(startOfTomorrow()), 'yyyy-MM-dd');
}

function checkIfDue(startDate, agendaDate) {
  if (!startDate) return;

  const taskDate = dateToUnix(startDate);
  const todayUnix = dateToUnix(agendaDate);
  if (taskDate <= todayUnix) return true;
  // console.log(todayHtml)

}

function isDateToday(date) {
  return isToday((new Date(date)));
}

function isBeforeToday(date) {
  return isBefore((new Date(date)), new Date(todayHtml()));
}

function weeksPassed(date) {
  return (differenceInWeeks(new Date(todayHtml()), new Date(date)));
}

function getAddedWeeks(date, weeksToAdd) {
  return format((addWeeks(new Date(date), weeksToAdd)), 'yyyy-MM-dd')
}
