<template>
    <v-container class="mt-10 h-screen">
        <v-container class="text-center">
            <h1 class="font-weight-bold text-h4 mb-0">О нас</h1>
        </v-container>

        <v-row>
            <v-col class="align-center font-weight-bold text-h6 mt-16 mr-16" elevation="2">
                {{ history }}
            </v-col>
            <v-col class="mt-16 ml-16">
                <v-img src="@/assets/ritg_logo.png"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        history: {
            type: String,
            required: true
        }
    }
}
</script>

