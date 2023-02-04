import { createStore } from 'vuex'
import locationStore from './modules/location-store.js'
import userStore from './modules/user-store.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    locationStore,
    userStore,
  },
})

export default store