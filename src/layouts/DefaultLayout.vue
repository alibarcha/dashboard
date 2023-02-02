<template>
  <v-app>
    <DarkLight></DarkLight>
    <v-main class="myColorTheme" id="main">
      <div class="outer-wrapper px-sm-5 px-3">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import DarkLight from "@/components/DarkLight.vue";
export default {
  name: "DefaultLayout",
  components: {
    DarkLight,
  },
};
</script>

<style scoped>

.theme--light .myColorTheme {
  background-color: #eee;
}
.outer-wrapper {
  padding-top: 80px;
}
</style>
