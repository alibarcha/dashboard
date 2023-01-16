<template>
  <button class="Settingbtn" @click="changeTheme">
    <v-icon  dark > {{myTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'}}</v-icon>
  </button>
</template>

<script>
export default {
  name: "SettingSidebar",
  data(){
    return {
        myTheme:false
    }
  },
  methods:{
    changeTheme(){
          this.myTheme=!this.myTheme
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
.Settingbtn {
  min-width: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 115px;
    right: 0;
  border-top-left-radius:8px ;
  border-bottom-left-radius: 8px;
  height: 38px;
  z-index: 999;
  cursor: pointer;
  text-align: center;
}
</style>