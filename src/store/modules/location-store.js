import { utilService } from '../../services/util-service.js';

// local
import { locationService } from '../../services/local-lacation-service';

// server
// import { locationService } from '../../services/location-service.js';

export default {
    strict: true,
    state: {
        locations: [],
        currLocation: null,
        filterBy: null,
        isHambOpen: false,
    },
    getters: {
        allLocations(state) {
            return state.locations;
        },
        isHambOpen(state) {
            return state.isHambOpen;
        },
        currLocation(state) {
            return state.currLocation;
        }
    },
    mutations: {
        toggleHamb(state) {
            state.isHambOpen = !state.isHambOpen;
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setLocations(state, { locations }) {
            state.locations = locations;
        },
        setLocationById(state, { newLocationIdx, newLocation }) {
            state.locations.splice(newLocationIdx, 1, newLocation);
            this.commit({ type: 'setAgendaMap' });
            if (newLocation._id === state.currLocation._id) {
                return state.currLocation = newLocation;
            }
        },
        addLocation(state, { newLocation }) {
            state.locations.push(newLocation);
            state.filterBy = null;
        },
        saveLocation(state, { location }) {
            const idx = state.locations.findIndex((currLocation) => currLocation._id === location._id);
            if (idx !== -1) state.locations.splice(idx, 1, location);
            else state.locations.push(location);
        },
        removeLocation(state, { locationId }) {
            const idx = state.locations.findIndex((location) => location._id === locationId);
            state.locations.splice(idx, 1);

        },
    },
    actions: {
        filter({ commit, dispatch }, { filterBy }) {
            locationService.query(filterBy).then((locations) => {
                commit({ type: 'setLocations', locations });
            });
            commit({ type: 'setFilter', filterBy });
            dispatch({ type: 'loadLocations' });
        },
        async loadLocations({ commit, dispatch }) {
            try {
                const locations = await locationService.query()
                commit({ type: 'setLocations', locations });
                // locationService.scssMsg('Ready');
                dispatch({ type: 'saveLocal' });
            } catch (error) {
                console.log('try-catch error:', error);
            }
        },
        async saveLocal({ state }) {
            const allLocations = JSON.parse(JSON.stringify(state.locations));
            utilService.saveToStorage('generic_db', allLocations);
        },
        async addNewLocation({ dispatch, commit }, { newLocation }) {
            try {
                const locationToAdd = await locationService.save(newLocation);
                console.log(`${locationToAdd.title} saved`)
                commit({type:"addLocation", newLocation: locationToAdd})
            } catch (err) {
                locationService.errMsg(`Can't add new location '${newLocation}'`);
                console.log('try-catch error:', err);
            }
        },
        async updateLocation({ dispatch, commit }, { location }) {
            try {
                const newLocation = await locationService.save(location);
                commit({ type: 'saveLocation', location: newLocation });
                commit({ type: "setCurrLocation", locationId: newLocation._id });
                dispatch({ type: 'loadLocations' });
            } catch (err) {
                console.log(err);
                locationService.errMsg(`Can't update location`);
            }
        },
        async removeLocation({ commit, dispatch }, { locationId }) {
            console.log(locationId);
            try {
                await locationService.remove(locationId);
                commit({ type: 'removeLocation', locationId });
                // commit({ type: 'setCurrLocation' });
                // dispatch({ type: 'loadLocations' });
            } catch (err) {
                console.log('try-catch error:', err);
                locationService.errMsg(`Can't remove location`);
            }
        },
    },
};