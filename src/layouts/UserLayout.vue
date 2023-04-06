<template>
  <v-app>
    <Navbar
      @toggle="toggleSidebar"
      :class="`${drawer ? 'is-menu-open-toolbar' : ''}`"
    />
    <Sidebar :menu="drawer" @toggle="handleToggle" />
    <DarkLight></DarkLight>
    <v-main :class="` ${drawer ? 'is-menu-open' : ''} myColorTheme `" id="main">
      <div class="outer-wrapper px-sm-5 px-3">
           <transition
          name="fade"
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        >
        <!-- router view -->
        <slot />
           </transition>
      </div>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import DarkLight from "@/components/DarkLight.vue";
export default {
  name: "UserLayout",
  components: {
    Sidebar,
    Footer,
    Navbar,
    DarkLight,
  },
  data() {
    return {
      drawer: false,
      myColorTheme: "",
    };
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

<style>
/* for footer fixing */
/* #main .v-main__wrap{
  display: grid !important;
} */
</style>
<style scoped>
.theme--light .myColorTheme {
  background-color: #eee;
}
@media screen and (min-width: 900px) {
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
