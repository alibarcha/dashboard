<template>
  <!-- Dashboard -->
  <v-container fluid class="my-12">
    <v-row>
      <v-col lg="4" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset mx-auto py-5 px-4 white--text"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
            style="background: rgb(233, 30, 99); border-color: rgb(233, 30, 99)"
          >
            <!-- chart 1 -->
            <BarChart></BarChart>
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
            class="v-sheet--offset mx-auto py-5 px-4 white--text"
            color="success"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
          >
            <!-- chart 2 -->

            <LineChart :data="chartData1" id="chart-2"></LineChart>
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
            class="v-sheet--offset mx-auto py-5 px-4 white--text"
            color="success"
            elevation="6"
            max-width="calc(100% - 32px)"
            rounded="8px"
            min-height="200px"
          >
            <!-- chart 3 -->

            <LineChart :data="chartData2" id="chart-3"></LineChart>
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
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
export default {
  name: "Dashboard",
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartData1: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: " Data ",
            data: [10, 15, 8, 15, 20, 15, 30],
            backgroundColor: "hsla(0,0%,100%,.8)",
            borderColor: "hsla(0,0%,100%,.8)",
            tension: 0.1,
            borderWidth: 5,
            hoverBorderJoinStyle: "round",
            hoverBorderWidth: 12,
          },
        ],
      },
      chartData2: {
        labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am",'9am'],
        datasets: [
          {
            label: " Data ",
            data: [180,700,400,280,250,230,210,190],
            backgroundColor: "hsla(0,0%,100%,.8)",
            borderColor: "hsla(0,0%,100%,.8)",
            tension: 0.1,
            borderWidth: 5,
            hoverBorderJoinStyle: "round",
            hoverBorderWidth: 12,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
  border-radius: 5px;
}
</style>

