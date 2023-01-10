<template>
  <v-navigation-drawer
    app
    temporary
    hide-overlay
    v-model="drawer"
    class="px-3 pt-3  black"
  >
    <v-list>
      <v-list-item>
        <v-avatar color="white" size="45">
          <img src="../assets/logo.svg" alt="logo" />
        </v-avatar>
        <v-list-item-title class="sub-title ps-3 white--text font-weight-bold">
          Vuetify MD
        </v-list-item-title>
      </v-list-item>
      <v-divider
        class="mb-2 mt-2"
        style="border-color: hsla(0, 0%, 100%, 0.2)"
      ></v-divider>

      <v-list-item
        link
        class="mb-3 white--text"
        v-for="link in links"
        v-bind:key="link.icon"
        :to="link.route"
        active-class="success sidebarListItem"
        style="border-color: #4caf50; border-radius: 4px"
      >
        <v-list-item-action>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <!-- last link -->
    <template #append>
      <v-list class="py-0">
        <v-list-item
          link
          class="white--text"
          v-for="link in lastLink"
          v-bind:key="link.icon"
          :to="link.route"
          active-class="success sidebarListItem"
          style="border-color: #4caf50; border-radius: 4px"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    menu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawer: {
      get() {
        return this.menu;
      },
      set(val) {
        this.$emit("toggle", val);
      },
    },
  },
  data() {
    return {
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-account", text: "User Profile", route: "/userprofile" },
        {
          icon: "mdi-clipboard-edit",
          text: "Regular Tables",
          route: "/regulartables",
        },
        { icon: "mdi-format-font", text: "Typography", route: "/typography" },
        { icon: "mdi-chart-bubble", text: "Icons", route: "/icons" },
        { icon: "mdi-google-maps", text: "Google Maps", route: "/googlemaps" },
        { icon: "mdi-bell", text: "Notifications", route: "/notifications" },
      ],
      lastLink: [
        {
          icon: "mdi-package-up",
          text: "Upgrade To Pro",
          route: "/upgrade",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>