import { createStore } from 'vuex'
import axiosClient from "../axios";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    actions: {
        async login({ commit }, user) {
            const { data } = await axiosClient.post('/login', user);
            console.log(data);
            commit('SET_USER', data);
            return data;
        },
        async register({ commit }, user) {
            const { data } = await axiosClient.post('/register', user);
            commit('SET_USER', data);
            return data;
        },
        async logout({ commit }) {
            const response = await axiosClient.post('/logout');
            commit('LOGOUT_USER');
            return response;
        }
    },
    mutations: {
        LOGOUT_USER: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem('TOKEN');
        },
        SET_USER: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {},
})

export default store;