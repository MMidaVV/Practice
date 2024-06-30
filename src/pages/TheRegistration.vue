<template>
    <v-container class="mt-16 justify-center h-screen">
        <v-card max-width="33.33%" class="mx-auto h-auto">
            <v-card-title class="px-5 text-center">Регистрация</v-card-title>
            <v-card-text class="pb-0">
                <v-text-field class="mt-2" dense label="Введите логин" v-model="username"></v-text-field>
                <v-text-field class="mt-2" dense label="Введите пароль" type="password"
                    v-model="password"></v-text-field>
                <v-text-field class="mt-2" dense label="Введите пароль повторно" type="password"
                    v-model="confirmPassword"></v-text-field>
            </v-card-text>
            <v-card-text v-if="passwordsMatch === false" class="py-0">
                <h4 style="color: red;" class="px-5 text-center">Пароли не совпадают</h4>
            </v-card-text>
            <v-card-actions v-if="passwordsMatch === true" class="justify-center">
                <v-btn color="indigo-darken-3" variant="outlined" class="font-weight-bold"
                    @click="registration(username, password, confirmPassword)">Зарегистрироваться</v-btn>
            </v-card-actions>
            <v-card-item class="justify-center">
                <router-link style="color: black;" to="/authorization">
                    <v-text>Авторизоваться</v-text>
                </router-link>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        passwordsMatch() {
            return this.password === this.confirmPassword
    }
    },
    methods: {
        async registration() {
            await this.$store.dispatch('registration', {
                username: this.username,
                password: this.password
            })
        }
    },
}
</script>