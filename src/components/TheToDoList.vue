<template>
    <v-app>
        <v-container class="mt-10">
            <v-container class="text-center">
                <h1 class="font-weight-bold text-h4 mb-0">Ваш список дел</h1>
            </v-container>
            <v-list>
                <v-card elevation="2" class="mx-auto border-thin my-5" v-for="(task, index) in tasks" :key="task.id">
                    <v-card-title class="px-5">Задача №{{ index + 1 }}</v-card-title>
                    <v-text-field class="px-5 text-black border-b-0" placeholder="Введите задачу тут" outlined
                        v-model="task.description" @input="updateTask(index, task)"></v-text-field>
                    <v-card-actions class="px-5">
                        <v-btn @click="deleteTask(index)">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-list>
            <v-container class="text-center">
                <v-btn elevation="2" @click="addTask">Добавить задачу</v-btn>
            </v-container>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            newTask: { description: '' }
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    },
    methods: {
        async addTask() {
            try {
                await this.$store.dispatch('addTask', this.newTask)
                this.newTask = { description: '' }
            } catch (error) {
                console.error('Error adding task:', error)
            }
        },
        async updateTask(index, task) {
            try {
                await this.$store.dispatch('updateTask', { index, task })
            } catch (error) {
                console.error('Error updating task:', error)
            }
        },
        async deleteTask(index) {
            try {
                await this.$store.dispatch('deleteTask', index)
            } catch (error) {
                console.error('Error deleting task:', error)
            }
        }
    },
    async created() {
        try {
            await this.$store.dispatch('fetchTasks')
        } catch (error) {
            console.error('Error fetching tasks:', error)
        }
    }
}
</script>
