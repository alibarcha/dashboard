<template>
  <v-app>
    <AppBar @toggle="toggleSidebar" :class="`${drawer ? 'is-menu-open-toolbar' : ''}`" />
    <TheNavbar :menu="drawer" @toggle="handleToggle" />
    <v-main :class="`${drawer ? 'is-menu-open' : ''}`" style="background-color: #eee;">
      <div class="outer-wrapper px-sm-5 px-3">
        <router-view/>
      </div>
      <TheFooter></TheFooter>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppBar from './components/AppBar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components:{
    TheNavbar,
    TheFooter,
    AppBar
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer;
    },
    handleToggle(val) {
      this.drawer = val;
    },
  },
};
</script>

<style scoped>
.is-menu-open {
  padding-left: 260px !important;
}
.is-menu-open-toolbar {
  left: 260px;
}
.outer-wrapper {
  padding-top: 80px;
}
</style>
