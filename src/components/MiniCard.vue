<template>
  <v-card elevation="2" class="mainCard">
    <v-sheet
      class="v-sheet--offset white--text"
      elevation="6"
      max-width="100px"
      rounded="8px"
      min-height="100px"
      :color="SheetColor"
    >
      <v-icon> {{ SheetIcon }}</v-icon>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="cardContent">
        <div class="title font-weight-light grey--text">{{ title }}</div>
        <h2 class="font-weight-light black--text">{{ NumberData }}</h2>
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon :class="`mr-2 ${FooterIconColor}`" small> {{ FooterIcon }}</v-icon>
      <span class="text-caption grey--text font-weight-light">
        {{ FooterText }}</span
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MiniCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    NumberData: {
      type: String,
      default: "",
    },
    SheetIcon: {
      type: String,
      default: "",
    },
    FooterIcon: {
      type: String,
      default: "",
    },
    FooterText: {
      type: String,
      default: "",
    },
    SheetColor:{
        type:String,
        default:'warning'
    },
    FooterIconColor:{
        type:String,
        default:''
    }
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -20px;
  position: relative;
  left: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-sheet--offset i {
  font-size: 35px;
  color: white;
}
.mainCard {
  position: relative;
}
.cardContent {
  position: absolute;
  top: 5px;
  right: 12px;
  text-align: end;
}
</style>