<template>
  <v-app>
    <Navbar @toggle="toggleSidebar" :class="`${drawer ? 'is-menu-open-toolbar' : ''}`" />
    <Sidebar :menu="drawer" @toggle="handleToggle" />
    <v-main :class="`${drawer ? 'is-menu-open' : ''}`" style="background-color: #eee;">
      <div class="outer-wrapper px-sm-5 px-3">
        <router-view/>
      </div>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Sidebar,
    Footer,
    Navbar
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

@media screen and (min-width:500px){
  .is-menu-open {
    padding-left: 260px !important;
}
.is-menu-open-toolbar {
  left: 260px;
}
}
.outer-wrapper {
  padding-top: 80px;
}
</style>
