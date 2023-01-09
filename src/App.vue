<template>
  <v-app>
      <TheNavbar></TheNavbar>

    <v-main class=" px-sm-5 px-3" style="background-color: #eee;">
      <router-view/>
    </v-main>
    
    <TheFooter></TheFooter>

  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components:{
    TheNavbar,
    TheFooter
  }
};
</script>
