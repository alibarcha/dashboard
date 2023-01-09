<template>
  <nav>
    <v-toolbar elevation="0" text class="grey lighten-5 ps-sm-5 ps-2" height="75px">
      <!-- toggle icon -->
      <v-btn icon v-bind="attrs" v-on="on" class="white " elevation="1">
        <v-icon class="grey--text lighten-3">mdi-dots-vertical</v-icon>
      </v-btn>
      <v-toolbar-title class="ps-4 d-sm-flex d-none font-weight-light text-capitalize">
        <!-- {{headerTitle}} -->
        {{ $route.name }}
      </v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- buttons & search menu -->
      <v-text-field
        label="Search"
        color="rgb(156, 39, 176)"
        class="searchBox mt-8 mr-4 ms-3"
      ></v-text-field>
      <v-btn icon class="white d-md-flex d-none mr-15" elevation="1">
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
        >
          <v-icon> mdi-bell </v-icon>
        </v-btn>
      </v-badge>

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
  </nav>
</template>

<script>
export default {
  name: "Thenavbar",
  data(){
    return {
        
    }
  },
 mounted(){
    console.log(this.$route)
 }
};
</script>

<style scoped>
.searchBox {
  max-width: 165px !important;
  color: rgba(0, 0, 0, 0.87);
}
</style>