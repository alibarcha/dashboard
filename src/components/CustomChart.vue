<template>
  <Bar 
  id="my-chart-id" 
  :options="chartOptions" 
  :data="chartData" 
  
  
   />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

export default {
  name: "CustomChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Ja",
          "Fe",
          "Ma",
          "AP",
          "Mai",
          "Ju",
          "Jul",
          "Au",
          "Se",
          "Oc",
          "No",
          "De",
        ],
        datasets: [
          {
            label: [' Data '],
            data: [500, 400, 300, 700, 500, 400, 300, 450, 550, 500, 700, 800],
            backgroundColor: "hsla(0,0%,100%,.8)",
            barThickness: 12,
            minBarLength: 8,
            maxBarThickness: 15,
            
           
            
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    };
  },
};
</script>
<style scoped>
#my-chart-id{
  /* background: red; */
  color: white !important;
}
</style>