<template>
  <v-card elevation="2" class="cardWrapper">
    <v-sheet
      class="v-sheet--offset white--text"
      elevation="6"
      max-width="calc(100% - 35px)"
      rounded="8px"
      min-height="115px"
      :color="SheetColor"
    >
      <slot name="sheetData"></slot>
    </v-sheet>
    <v-card-text class="pt-0">
      <slot name="cardData"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    SheetColor: {
      type: String,
      default: "warning",
    },
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -20px;
  position: relative;
  left: 18px;
  border-radius: 5px;
  padding: 25px;
}
</style>