<template>
  <!-- Dashboard -->
  <v-container fluid class="mt-12 mb-8">
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
            color="primary"
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

    <!-- mini cards -->
    <v-row class="mt-12">
      <v-col lg="3" sm="6" cols="12" class="mt-sm-0 mt-6">
        <MiniCard
          NumberData="+245"
          title="Followers"
          SheetIcon="mdi-twitter"
          FooterIcon="mdi-clock-outline"
          FooterText="Just Updated"
          SheetColor="primary"
        >
        </MiniCard>
      </v-col>
      <v-col lg="3" sm="6" cols="12" class="mt-sm-0 mt-6">
        <MiniCard
          NumberData="75.521"
          title="Website Visits"
          SheetIcon="mdi-chart-bar"
          FooterIcon="mdi-tag"
          FooterText="Tracked from Google Analytics"
          SheetColor="success"
        >
        </MiniCard>
      </v-col>
      <v-col lg="3" sm="6" cols="12" class="mt-lg-0 mt-6">
        <MiniCard
          NumberData="$ 34,245"
          title="Revenue"
          SheetIcon="mdi-home-city"
          FooterIcon="mdi-calendar-check"
          FooterText="Last 24 Hours"
          SheetColor="success"
        >
        </MiniCard>
      </v-col>
      <v-col lg="3" sm="6" cols="12" class="mt-lg-0 mt-6">
        <MiniCard
          NumberData="184"
          title="Bookings"
          SheetIcon="mdi-sofa"
          FooterIcon="mdi-alert-rhombus"
          FooterText="Get More Space..."
          SheetColor="warning"
          FooterIconColor="error--text"
        >
        </MiniCard>
      </v-col>
    </v-row>

    <!-- Main Cards -->

    <v-row class="mt-10">
      <v-col lg="6" cols="12">
        <MainCard SheetColor="warning">
          <template #sheetData>
            <div class="title font-weight-light">Employees Stats</div>
            <div
              class="subtitle-2 font-weight-light"
              style="color: hsla(0, 0%, 100%, 0.8)"
            >
              New employees on 15th September, 2022
            </div>
          </template>
          <template #cardData>
            <!-- cardData table -->
            <v-data-table
              :headers="headers"
              :items="tableData"
              :items-per-page="5"
              class="elevation-0 font-weight-light"
            ></v-data-table>
          </template>
        </MainCard>
      </v-col>

      <v-col lg="6" cols="12" class="mt-lg-0 mt-12">
        <MainCard SheetColor="success">
          <template #sheetData>
            <div class="sheetMainCardWrapper">
              <span class="title font-weight-light pl-sm-0 pl-5">Tasks:</span>
              <!-- tabs -->
              <v-tabs
                v-model="tab"
                align-with-title
                background-color="transparent"
                dark
                show-arrows
                centered
              >
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab v-for="(item, index) in items" :key="`item${index}`">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  {{ item.text }}
                </v-tab>
              </v-tabs>
            </div>
          </template>

          <template #cardData>
            <!-- tabs content -->
            <v-tabs-items v-model="tab">
              <!-- 1 tab content -->
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="(tab, index) in tabContent1"
                    v-bind:key="`${index}`"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          color="success"
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-row>
                          <v-col sm="10" cols="12">
                            <v-list-item-title
                              class="font-weight-light cardDataPara"
                              >{{ tab.text }}</v-list-item-title
                            >
                          </v-col>
                          <v-col cols="1">
                            <v-icon size="20">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="1">
                            <v-icon class="error--text" size="20"
                              >mdi-close</v-icon
                            >
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list>
              </v-tab-item>
              <!-- 2 ta content -->
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="(tab, index) in tabContent2"
                    v-bind:key="`${index}`"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          color="success"
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-row>
                          <v-col sm="10" cols="12">
                            <v-list-item-title
                              class="font-weight-light cardDataPara"
                              >{{ tab.text }}</v-list-item-title
                            >
                          </v-col>
                          <v-col cols="1">
                            <v-icon size="20">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="1">
                            <v-icon class="error--text" size="20"
                              >mdi-close</v-icon
                            >
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list>
              </v-tab-item>

              <!-- 3 tab content -->
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="(tab, index) in tabContent3"
                    v-bind:key="`tab${index}`"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          color="success"
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-row>
                          <v-col sm="10" cols="12">
                            <v-list-item-title
                              class="font-weight-light cardDataPara"
                              >{{ tab.text }}</v-list-item-title
                            >
                          </v-col>
                          <v-col cols="1">
                            <v-icon size="20">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="1">
                            <v-icon class="error--text" size="20"
                              >mdi-close</v-icon
                            >
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list>
              </v-tab-item>
            </v-tabs-items>
          </template>
        </MainCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import MiniCard from "../components/MiniCard.vue";
import MainCard from "../components/MainCard.vue";
export default {
  name: "Dashboard",
  components: {
    BarChart,
    LineChart,
    MiniCard,
    MainCard,
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
        labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
        datasets: [
          {
            label: " Data ",
            data: [180, 700, 400, 280, 250, 230, 210, 190],
            backgroundColor: "hsla(0,0%,100%,.8)",
            borderColor: "hsla(0,0%,100%,.8)",
            tension: 0.1,
            borderWidth: 5,
            hoverBorderJoinStyle: "round",
            hoverBorderWidth: 12,
          },
        ],
      },

      //-------card table data ---------
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Salary", value: "salary" },
        { text: "Country", value: "country" },
        { text: "City", value: "city" },
      ],
      tableData: [
        {
          name: "alibarcha",
          id: 1,
          salary: "$35,738",
          country: "pakistan",
          city: "islamabad",
        },
        {
          name: "Minerva Hooper",
          id: 2,
          salary: "$23,738",
          country: "Curaçao	",
          city: "Sinaai-Waas",
        },
        {
          name: "Sage Rodriguez",
          id: 3,
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          name: "Philip Chanley",
          id: 4,
          salary: "$35,738",
          country: "Korea, South",
          city: "Gloucester",
        },
        {
          name: "Doris Greene",
          id: 5,
          salary: "$65,738",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
      ],
      // --------tabs Data --------
      tab: null,
      items: [
        { text: "Bugs", icon: "mdi-bug" },
        { text: "WEBSITE", icon: "mdi-code-tags" },
        { text: "SERVER", icon: "mdi-cloud" },
      ],
      // tab content 1
      tabContent1: [
        {
          text: 'Sign contract for "What are conference organizers afraid of?',
        },
        {
          text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
        {
          text: 'Sign contract for "What are conference organizers afraid of?',
        },
      ],
      // tab content 2
      tabContent2: [
        {
          text: 'Sign contract for "What are conference organizers afraid of?',
        },
        {
          text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
      ],
      // tab content 3
      tabContent3: [
        {
          text: 'Sign contract for "What are conference organizers afraid of?',
        },
        {
          text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
      ],
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
/* sheetMainCardWrapper */
.sheetMainCardWrapper {
  display: flex;
  justify-content: center !important;
  align-items: center;
}
.cardDataPara {
  white-space: pre-wrap;
}
</style>

