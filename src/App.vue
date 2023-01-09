<template>
  <v-app>
      <TheNavbar></TheNavbar>

    <v-main>
      <router-view/>
    </v-main>
    footer
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
export default {
  name: 'App',
  components:{
    TheNavbar,
  }
};
</script>
