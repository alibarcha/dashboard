<template>
  <nav>
    <v-toolbar
      elevation="0"
      text
      class="grey lighten-3 ps-sm-5 ps-2"
      height="75px"
    >
      <!-- toggle icon -->
      <v-btn icon class="white" elevation="1" @click.native="drawer = !drawer">
        <v-icon class="grey--text lighten-3">mdi-dots-vertical</v-icon>
      </v-btn>
      <v-toolbar-title
        class="ps-4 d-sm-flex d-none font-weight-light text-capitalize"
      >
        <!-- {{headerTitle}} -->
        {{ $route.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- buttons & search menu -->
      <v-text-field
        label="Search"
        color="rgb(156, 39, 176)"
        class="searchBox mt-8 mr-4 ms-3"
        ref="searchInput"
      ></v-text-field>
      <v-btn
        icon
        class="white d-md-flex d-none mr-15"
        elevation="1"
        @click="focusInput"
      >
        <v-icon class="grey--text lighten-3"> mdi-magnify </v-icon>
      </v-btn>

      <v-btn
        elevation="0"
        class="grey lighten-3"
        width="30px"
        height="40px"
        small
        to="/"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <!-- dropdown menu -->
      <v-menu
        rounded="5px"
        min-width="150px"
        left
        offset-y
        transition="scroll-x-reverse-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            color="error"
            overlap
            bordered
            content="5"
            offset-x="32"
            offset-y="23"
          >
            <v-btn
              elevation="0"
              class="grey lighten-3 mx-2"
              width="30px"
              height="40px"
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-bell </v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list>
          <v-list-item
            link
            v-for="(menu, index) in menuLinks"
            v-bind:key="`menu.text${index}`"
            class="theme-light font-weight-light menuItem mx-2"
          >
            <v-list-item-title>
              {{ menu.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        elevation="0"
        class="grey lighten-3"
        width="30px"
        height="40px"
        small
        to="userprofile"
      >
        <v-icon> mdi-account </v-icon>
      </v-btn>
    </v-toolbar>

    <!-- sidebar Navigation drawer -->

    <v-navigation-drawer
      app
      temporary
      hide-overlay
      v-model="drawer"
      class="px-3 pt-3 black"
    >
      <v-list>
        <v-list-item>
          <v-avatar color="white" size="45">
            <img src="../assets/logo.svg" alt="logo" />
          </v-avatar>
          <v-list-item-title
            class="sub-title ps-3 white--text font-weight-bold"
          >
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
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      drawer: false,
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
        {
          icon: "mdi-package-up",
          text: "Upgrade To Pro",
          route: "/upgrade",
        },
      ],
      menuLinks: [
        { text: "Mike John Responded to your email" },
        { text: "You have 5 new tasks" },
        { text: "You're now friends with Andrew" },
        { text: "Another Notification" },
        { text: "Another one" },
      ],
    };
  },
  methods: {
    focusInput() {
      //  console.log(  this.$refs.searchInput)
      this.$refs.searchInput.focus();
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.searchBox {
  max-width: 165px !important;
  color: rgba(0, 0, 0, 0.87);
}
.menuItem{
  font-weight: 400;
    font-size: 13px;
}
.menuItem:hover{
      box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
      background:rgb(164, 56, 182);
      color: white !important;
      border-radius: 2px;
}

</style>