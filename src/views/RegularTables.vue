<template>
  <!--regular table -->

  <v-container fluid class="my-12">
    <v-row>
      <v-col class="text-center py-0">
        <h1 class="font-weight-light mb-1 headline">Vuetify Simple Tables</h1>
        <span class="font-weight-light subtitle-1">
          Please checkout the
          <a
            href="https://vuetifyjs.com/components/simple-tables"
            rel="noopener"
            target="_blank"
            class="primary--text"
            style="text-decoration: none"
          >
            full documentation
          </a></span
        >
      </v-col>
    </v-row>
<!-- table 1 -->
    <v-row class="my-10 py-0">
      <v-col>
        <v-card elevation="2" class="cardWrapper">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="100px"
            rounded="8px"
            min-height="100px"
            color="success"
          >
            <v-icon>mdi-clipboard-text</v-icon>
          </v-sheet>
          <v-card-text class="pt-0">
            <v-data-table
              :headers="headers"
              :items="tableData"
              :items-per-page="6"
              class="elevation-0 font-weight-light"
              hide-default-footer
              disable-sort
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
<!-- table 2 -->
      <v-row class="my-10 py-0">
      <v-col>
        <v-card elevation="2" class="cardWrapper" dark>
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="100px"
            rounded="8px"
            min-height="100px"
            color="success"
          >
            <v-icon>mdi-clipboard-plus-outline</v-icon>
          </v-sheet>
          <v-card-text class="pt-0">
            <v-data-table
              :headers="headers"
              :items="tableData"
              :items-per-page="6"
              class="elevation-0 font-weight-light"
              hide-default-footer
              disable-sort
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "RegularTables",
  data() {
    return {
      //-------card table data ---------
      headers: [
        {
          text: "ID",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Country", value: "country" },
        { text: "City", value: "city" },
        { text: "Salary", value: "salary" },
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
        {
          name: "Doris Greene",
          id: 6,
          salary: "$65,738",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
      ],
    };
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
</style>
