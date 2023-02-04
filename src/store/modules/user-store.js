
import { userService } from '../../services/user-service.js';

export default {
    strict: true,
    state: {
        users: [],
        loggedUser: userService.getLoggedinUser(),
    },
    getters: {
        loggedUser(state) {
            return state.loggedUser;
        }
    },
    mutations: {
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setUsers(state, { user }) {
            state.user = user;
        },
        setloggedUser(state, {user}) {
            state.loggedUser = user;
        },
        logoutUser(state) {
            state.loggedUser = null
            console.log(state.loggedUser)
        },
        addUser(state, { user }) {
            const userToSave = user;
            state.users.unshift(userToSave);
            state.filterBy = null;
        },
        saveUser(state, { user }) {
            console.log(user);
            const idx = state.users.findIndex((curruser) => curruser._id === user._id);
            if (idx !== -1) state.users.splice(idx, 1, user);
            else state.users.push(user);
        },
        removeuser(state, { id }) {
            const idx = state.users.findIndex((user) => user._id === id);
            state.users.splice(idx, 1);
        },
    },
    actions: {
        async loadLoggedUser(context) {
            try{
                const user = await userService.getLoggedinUser()
                context.commit({ type: 'setloggedUser', user })
            } catch (err) {
                console.log(err)
            }
        },
        async login({commit}, { cred }) {
            try {
                const user = await userService.login(cred);
                console.log(user);
                commit({ type: 'setloggedUser', user });
            } catch (err) {
                console.log(err);
            }
        },
        async logout(context) {
            try {
                userService.logout()
                context.commit({ type: 'logoutUser' });
            } catch (err) {
                console.log(err)
            }
        },
        async saveUser(context, { fullname, username, password }) {
            try {
                const user = await userService.signup(fullname, username, password)
                console.log(user)
            } catch(err) {
                console.log(err)
            }
        },
    },
    modules: {

    }
};