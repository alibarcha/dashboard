<template>
  <!-- <h1>Dashboard</h1> -->
  <v-container fluid class="my-12" style="border: 1px solid red">
    <v-row>
      <v-col lg="4" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="success"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
          >
            djkcvfjk 1
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">Website Views</div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock-outline</v-icon>
            <span class="text-caption grey--text font-weight-light"
              >updated 10 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" cols="12" class="my-lg-0 my-10">
        <v-card>
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="success"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
          >
            djkcvfjk 2
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">Daily Sales</div>
            <div class="subheading font-weight-light grey--text">
              <span>
                <v-icon size="16px" class="success--text pb-1"
                  >mdi-arrow-up</v-icon
                >
                <span class="success--text">55%</span>
                increase in today's sales
              </span>
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock-outline</v-icon>
            <span class="text-caption grey--text font-weight-light"
              >last registration 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="success"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
          >
            djkcvfjk 3
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">Completed Tasks</div>
            <div class="subheading font-weight-light grey--text">
              Last Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock-outline</v-icon>
            <span class="text-caption grey--text font-weight-light"
              >campaign sent 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
  border-radius: 5px;
}
</style>

