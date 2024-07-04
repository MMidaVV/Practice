<template>
  <v-app class="h-screen">
    <TheHeader></TheHeader>
    <router-view v-bind:history="history"></router-view>
    <TheFooter v-bind:history="history"></TheFooter>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      history: 'Компания Russian IT Group существует на рынке уже 18 лет. И хотя она фактически была основана в 2006 году, идея ее зарождения возникла еще в 2002 году. Наша компания динамично развивается и с каждым годом привлекает все больше клиентов.Профессионализм команды ежегодно признается Всероссийскими рейтингами и позволяет выходить на новые рынки. Сейчас мы являемся одной из самых амбициозных и перспективных ИТ - компаний, входящих в ТОП агентств России.'
    }
  }
}
</script>


