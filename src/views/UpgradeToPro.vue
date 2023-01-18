<template>
  <!--upgrade to pro -->

  <v-container class="mt-12 mb-8">
    <v-row class="justify-center">
      <v-col md="8" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="calc(100% - 35px)"
            rounded="8px"
            min-height="90px"
            color="success"
          >
            <p class="body-1 font-weight-light mb-0">
              Vuetify Material Dashboard
            </p>
            <div
              class="body-2 font-weight-light"
              style="color: hsla(0, 0%, 100%, 0.8)"
            >
              Are you looking for more components? Please check our Premium
              Version of Vuetify Material Dashboard
            </div>
          </v-sheet>
          <v-card-text
            class="pt-0"
            style="overflow-x: auto; overflow-y: hidden"
          >
            <v-simple-table class="px-5">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      class="text-left subheading font-weight-light"
                      style="border-bottom: none !important"
                    ></th>
                    <th
                      class="text-left subheading font-weight-light"
                      style="border-bottom: none !important"
                    >
                      FREE
                    </th>
                    <th
                      class="text-left subheading font-weight-light text-center"
                      style="border-bottom: none !important"
                    >
                      PRO
                    </th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr v-for="item in desserts" :key="item.name">
                    <td
                      class="font-weight-light subtitle-1"
                      style="border-bottom: none !important"
                    >
                      {{ item.name }}
                    </td>
                    <td style="border-bottom: none !important">
                      {{ item.icon ? "" : item.free }}
                      <v-icon
                        class="theme--light error--text"
                        v-if="item.icon"
                        size="20"
                        >{{ item.free }}</v-icon
                      >
                    </td>
                    <td
                      class="text-center"
                      style="border-bottom: none !important"
                    >
                      {{ item.icon ? "" : item.pro }}
                      <v-icon
                        class="theme--light success--text"
                        size="20"
                        v-if="item.icon"
                        >{{ item.pro }}</v-icon
                      >
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <v-btn
                        class="font-weight-light my-1 black--text body-2"
                        disabled
                        color="secondary"
                        large
                      >
                        CURRENT VERSION
                      </v-btn>
                    </td>
                    <td>
                      <v-btn
                        class="white--text font-weight-light my-1 body-2"
                        color="success"
                        large
                        target="_blank"
                        href="#"
                      >
                        UPGRADE TO PRO
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UpgradeToPro",
  data() {
    return {
      desserts: [
        {
          name: "Components",
          free: 60,
          pro: 200,
        },
        {
          name: "Plugins",
          free: 2,
          pro: 4,
        },
        {
          name: "Examples Pages",
          free: 3,
          pro: 8,
        },
        {
          name: "Login,Register,Pricing,Lock Pages",
          free: "mdi-close",
          pro: "mdi-check",
          icon: true,
        },
        {
          name: "Premium Support",
          free: "mdi-close",
          pro: "mdi-check",
          icon: true,
        },
        {
          name: "",
          free: "Free",
          pro: "Just for $79",
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
  left: 18px;
  border-radius: 5px;
  padding: 12px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
