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
            try {
                const { data } = await axiosClient.post('/login', user);
                console.log(data);
                commit('SET_USER', data);
                return data;
            } catch (error) {
                console.error(error);
            }
        },
        async register({ commit }, user) {
            try {
                const { data } = await axiosClient.post('/register', user);
                console.log(data);
                commit('SET_USER', data);
                return data;
            } catch (err) {
                console.error(err);
            }
        },
        
    },
    mutations: {
        LOGOUT_USER: (state) => {
            state.user.token = null;
            state.user.data = {};
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