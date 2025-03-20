import  { createStore } from 'vuex';

export default createStore({
    state: {
        isAuthenticated: false,
        user: null,
    },
    mutations: {
        setAuthenticated(state,isAuthenticated){
            state.isAuthenticated = isAuthenticated;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        login({ commit }, user){
            commit('setAuthenticated', true);
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setAuthenticated',false);
            commit('setUser', null);
        },
    },
});