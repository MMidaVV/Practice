<template>
    <v-container class="mt-16 justify-center h-screen">
        <v-card max-width="33.33%" class="mx-auto h-auto ">
            <v-card-title class="px-5 text-center">Авторизация</v-card-title>
            <v-card-text class="py-0">
                <v-text-field v-model="login" class="mt-2" dense label="Введите логин"></v-text-field>
                <v-text-field v-model="password" class="mt-2" dense label="Введите пароль"></v-text-field>
            </v-card-text>
            <v-card-text v-if="checkAuthorization === false">
                <h4 class="px-5 text-center">Не верный логин или пароль</h4>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn color="indigo-darken-3" variant="outlined" class="font-weight-bold"
                    @click="authorization()">Авторизоваться</v-btn>
            </v-card-actions>
            <v-card-item class="justify-center">
                <router-link to="/registration">
                    <v-text>Зарегистрироваться</v-text>
                </router-link>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            checkAuthorization: true
        }
    },
    methods: {
        async authorization() {
            try {
                const response = await this.$store.dispatch('authorization', {
                    login: this.login,
                    password: this.password
                });
                if (response) {
                    this.$router.push('/main');
                } else {
                    this.checkAuthorization = false
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        }
    }
}
</script>
