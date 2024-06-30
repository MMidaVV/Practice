<template>
    <v-container fluid class="m-2 p-2">
        <v-app-bar absolute color="#BBDEFB" dark>
            <v-img max-width="50" src="@/assets/logo.png" class="rounded-circle mx-5"></v-img>
            <router-link style="color: black;" to="/main"><v-btn class="font-weight-bold">Главная</v-btn></router-link>
            <p>Количество задач: {{ tasks.length }}</p>
            <v-spacer></v-spacer>
            <router-link style="color: black;" to="/authorization">
                <v-btn dark class="font-weight-bold ml-3">Авторизация</v-btn>
            </router-link>
            <router-link style="color: black;" to="/about">
                <v-btn class="font-weight-bold ml-3">О нас</v-btn>
            </router-link>
            <router-link style="color: black;" to="/contacts">
                <v-btn dark class="font-weight-bold ml-3">Контакты</v-btn>
            </router-link>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    },
}
</script>

