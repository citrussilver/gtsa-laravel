import { createStore } from 'vuex'
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: 'Sample survey content',
        slug: 'sample-survey-content',
        status: 'draft',
        image: 'https://picsum.photos/200/300.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio tenetur porro dolore maiores voluptas in similique cupiditate beatae ea!',
        created_at: '2021-12-20 18:00:00',
        update_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [
            {
                id: 1,
                type: 'select',
                question: 'From which country are you?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA'
                        },
                        {
                            uuid: '8d14341b-eC2B-4924-9aea-bda6a53b51fc', text: 'United Kingdom'
                        }
                    ]
                }
            },
            {
                id: 2,
                type: 'options',
                question: 'Which language videos do you want to see?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'ff9c6733-2a6b-44ae-acef-6be36224c24a', 
                            text: 'JavaScript'
                        },
                        {
                            uuid: '9a4c97be-220e-4a26-b927-02dacc54bbdd', 
                            text: 'HTML + CSS'
                        }
                    ]
                }
            },
            {
                id: 3,
                type: 'radio',
                question: 'Which Laravel framework do you love?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: '56e6082f-defe-4e4d-ad2a-eee81b73bfea', 
                            text: 'Laravel 5'
                        },
                        {
                            uuid: '39030c87-2cbe-4b82-83e5-a06c6e357fd6', 
                            text: 'Laravel 6'
                        },
                        {
                            uuid: '1e90b701-41fb-4f3e-954d-fc32c7245ead', 
                            text: 'Laravel 7'
                        },
                        {
                            uuid: 'dde8ae42-b5ff-4dcd-a0fd-ca2394839958',
                            text: 'Laravel 8'
                        }
                    ]
                }
            },  
        ],
    },
    {
        id: 200,
        title: 'Sample survey content',
        slug: 'sample-survey-content',
        status: 'draft',
        image: 'https://picsum.photos/200/300.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio tenetur porro dolore maiores voluptas in similique cupiditate beatae ea!',
        created_at: '2021-12-20 18:00:00',
        update_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [
            {
                id: 1,
                type: 'select',
                question: 'From which country are you?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA'
                        },
                        {
                            uuid: '8d14341b-eC2B-4924-9aea-bda6a53b51fc', text: 'United Kingdom'
                        }
                    ]
                }
            },
            {
                id: 2,
                type: 'options',
                question: 'Which language videos do you want to see?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'ff9c6733-2a6b-44ae-acef-6be36224c24a', 
                            text: 'JavaScript'
                        },
                        {
                            uuid: '9a4c97be-220e-4a26-b927-02dacc54bbdd', 
                            text: 'HTML + CSS'
                        }
                    ]
                }
            },
            {
                id: 3,
                type: 'radio',
                question: 'Which Laravel framework do you love?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: '56e6082f-defe-4e4d-ad2a-eee81b73bfea', 
                            text: 'Laravel 5'
                        },
                        {
                            uuid: '39030c87-2cbe-4b82-83e5-a06c6e357fd6', 
                            text: 'Laravel 6'
                        },
                        {
                            uuid: '1e90b701-41fb-4f3e-954d-fc32c7245ead', 
                            text: 'Laravel 7'
                        },
                        {
                            uuid: 'dde8ae42-b5ff-4dcd-a0fd-ca2394839958',
                            text: 'Laravel 8'
                        }
                    ]
                }
            },  
        ],
    },
    {
        id: 300,
        title: 'Sample survey content',
        slug: 'sample-survey-content',
        status: 'draft',
        image: 'https://picsum.photos/200/300.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur distinctio tenetur porro dolore maiores voluptas in similique cupiditate beatae ea!',
        created_at: '2021-12-20 18:00:00',
        update_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [
            {
                id: 1,
                type: 'select',
                question: 'From which country are you?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA'
                        },
                        {
                            uuid: '8d14341b-eC2B-4924-9aea-bda6a53b51fc', text: 'United Kingdom'
                        }
                    ]
                }
            },
            {
                id: 2,
                type: 'options',
                question: 'Which language videos do you want to see?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'ff9c6733-2a6b-44ae-acef-6be36224c24a', 
                            text: 'JavaScript'
                        },
                        {
                            uuid: '9a4c97be-220e-4a26-b927-02dacc54bbdd', 
                            text: 'HTML + CSS'
                        }
                    ]
                }
            },
            {
                id: 3,
                type: 'radio',
                question: 'Which Laravel framework do you love?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: '56e6082f-defe-4e4d-ad2a-eee81b73bfea', 
                            text: 'Laravel 5'
                        },
                        {
                            uuid: '39030c87-2cbe-4b82-83e5-a06c6e357fd6', 
                            text: 'Laravel 6'
                        },
                        {
                            uuid: '1e90b701-41fb-4f3e-954d-fc32c7245ead', 
                            text: 'Laravel 7'
                        },
                        {
                            uuid: 'dde8ae42-b5ff-4dcd-a0fd-ca2394839958',
                            text: 'Laravel 8'
                        }
                    ]
                }
            },  
        ],
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tmpSurveys],
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