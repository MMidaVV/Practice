<template>
    <v-app>
        <TheToDoList></TheToDoList>
    </v-app>
    
</template>

<script>
import TheToDoList from '@/components/TheToDoList.vue'
export default {
    name: 'App',
    components: {
        TheToDoList
    },
}
</script>

<style></style>