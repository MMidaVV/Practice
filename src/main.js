import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'


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
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/tasks')
                commit('setTasks', response.data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
            }
        },
        async addTask({ commit }, task) {
            try {
                const response = await axios.post('http://localhost:3000/tasks', task)
                commit('addTask', response.data)
            } catch (error) {
                console.error('Error adding task:', error)
            }
        },
        async updateTask({ commit, state }, { index, task }) {
            try {
                await axios.put(`http://localhost:3000/tasks/${state.tasks[index].id}`, task)
                commit('updateTask', { index, task })
            } catch (error) {
                console.error('Error updating task:', error)
            }
        },
        async deleteTask({ commit, state }, index) {
            try {
                await axios.delete(`http://localhost:3000/tasks/${state.tasks[index].id}`)
                commit('deleteTask', index)
            } catch (error) {
                console.error('Error deleting task:', error)
            }
        },
        async authorization({ commit }, { login, password }) {
            try {
                const response = await axios.get(`http://localhost:3000/users?username=${login}`);
                const user = response.data.find(u => u.username === login && u.password === password);
                if (user) {
                    commit('setUser', user);
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error('Ошибка при входе в систему:', error);
                return false;
            }
        },
        async registration({ commit }, { username, password }) {
            try {
                const response = await axios.post('http://localhost:3000/users', { username, password })
                commit('setUser', response.data)
            } catch (error) {
                console.error('Error registering user:', error)
            }
        }
    }
})

loadFonts()

const app = createApp(App).use(router)
app.use(vuetify)
app.mount('#app')
app.use(router)
app.use(store)