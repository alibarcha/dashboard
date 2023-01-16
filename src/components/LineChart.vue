<template>
  <LineChartGenerator :id="id" :options="allOptions" :data="data" />
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: { LineChartGenerator },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    data: {
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
         scales:{
          x:{
            ticks:{
              color:'hsla(0,0%,100%,.8)'
            }
          },
          y:{
              ticks:{
              color:'hsla(0,0%,100%,.8)'
            }
          }
        }
      },
    };
  },
  computed: {
    allOptions() {
      return { ...this.chartOptions, ...this.options };
    },
  },
};
</script>
<style scoped>

</style>