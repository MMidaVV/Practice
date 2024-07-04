import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'
import '@/assets/index.css'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('Произошла ошибка:', error)
        return Promise.reject(error)
    }
)


const store = createStore({
    state() {
        return {
            tasks: [],
            users: []
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        updateTask(state, { index, task }) {
            state.tasks[index] = task
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1)
        },
        setUser(state, users) {
            state.users = users
        }
    },
    actions : {
        async fetchTasks({ commit }) {
            const response = await axiosInstance.get('/tasks')
            commit('setTasks', response.data)
        },
        async addTask({ commit }, task) {
            const response = await axiosInstance.post('/tasks', task)
            commit('addTask', response.data)
        },
        async updateTask({ commit, state }, { index, task }) {
            await axiosInstance.put(`/tasks/${state.tasks[index].id}`, task)
            commit('updateTask', { index, task })
        },
        async deleteTask({ commit, state }, index) {
            await axiosInstance.delete(`/tasks/${state.tasks[index].id}`)
            commit('deleteTask', index)
        },
        async authorization({ commit }, { login, password }) {
            const response = await axiosInstance.get(`/users?username=${login}`)
            const user = response.data.find(u => u.username === login && u.password === password)
            if (user) {
                commit('setUser', user)
                return true
            } else {
                return false
            }
        },
        async registration({ commit }, { username, password }) {
            const response = await axiosInstance.post('/users', { username, password })
            commit('setUser', response.data)
        }
    }
})

loadFonts()

const app = createApp(App).use(router)
app.use(vuetify)
app.mount('#app')
app.use(router)
app.use(store)