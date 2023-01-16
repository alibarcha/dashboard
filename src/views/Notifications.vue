<template>
  <!-- icons -->

  <v-container fluid class="my-12">
    <v-row>
      <v-col class="text-center py-0">
        <h1 class="font-weight-light mb-1 headline">Vuetify Alerts</h1>
        <span class="font-weight-light subtitle-1">
          Please checkout the
          <a
            href="https://vuetifyjs.com/components/alerts"
            rel="noopener"
            target="_blank"
            class="secondary--text"
            style="text-decoration: none"
          >
            full documentation
          </a></span
        >
      </v-col>
    </v-row>

    <v-row class="my-10">
      <v-col md="6" cols="12">
        <v-card elevation="2" class="pa-5">
          <h5 class="font-weight-light title mb-8">Notification Style</h5>
          <v-alert class="font-weight-light subtitle-2 info white--text">
            This is a plain notification.
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 white--text mt-10"
            dismissible
            color="info"
            prominent
            dark
          >
            This is a notification with close button.
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 white--text mt-8 alertMain"
            dismissible
            color="info"
            dark
            type="info"
          >
            <template #prepend>
              <v-avatar color="dark" size="40" class="white cardIconBox">
                <v-icon color="info">mdi-bell</v-icon>
              </v-avatar>
            </template>
            <p class="pl-md-14 pl-8">
              This is a notification with close button and icon and have many
              lines. You can see that the icon and the close button are always
              vertically aligned. This is a beautiful notification. So you don't
              have to worry about the style.
            </p>
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 white--text mt-8 alertMain"
            dismissible
            color="success"
            dark
            type="info"
          >
            <template #prepend>
              <v-avatar color="dark" size="40" class="white cardIconBox">
                <v-icon color="success">mdi-bell</v-icon>
              </v-avatar>
            </template>
            <p class="pl-md-14 pl-8">
              You can see that the icon and the close button are always
              vertically aligned. This is a beautiful notification. So you don't
              have to worry about the style.
            </p>
          </v-alert>
        </v-card>
      </v-col>

      <v-col md="6" cols="12">
        <v-card elevation="2" class="pa-5">
          <h5 class="font-weight-light title mb-8">Notification Style</h5>

          <v-alert
            class="font-weight-light subtitle-2 info white--text py-6"
            dark
            dismissible
          >
            <span class="text-uppercase caption">info</span>
            —This is a regular alert made with the color of "info"
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 success white--text mt-8 py-6"
            dark
            dismissible
          >
            <span class="text-uppercase caption">SUCCESS</span>
            —This is a regular alert made with the color of "success"
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 warning white--text mt-8 py-6"
            dark
            dismissible
          >
            <span class="text-uppercase caption">WARNING </span>
            —This is a regular alert made with the color of "warning"
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 error white--text mt-8 py-6"
            dark
            dismissible
          >
            <span class="text-uppercase caption">ERROR </span>
            —This is a regular alert made with the color of "error"
          </v-alert>

          <v-alert
            class="font-weight-light subtitle-2 pink white--text py-6 mt-8"
            dark
            dismissible
          >
            <span class="text-uppercase caption">PINK DARKEN-1</span>
            —This is a regular alert made with the color "pink darken-1"
          </v-alert>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs & alerts -->
    <v-row>
      <v-col cols="12" class="mb-5">
        <v-card elevation="2" class="pa-5">
          <h4 class="font-weight-light text-center mb-4">Snackbar Locations</h4>
          <v-row class="text-center justify-center">
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text"
                block
                @click="snackbar1 = true"
              >
                TOP LEFT
              </v-btn>
              <!-- snackbar 1 -->
              <v-snackbar
                v-model="snackbar1"
                left
                top
                color="error px-5"
                height="80px"
                timeout="4000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar1 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>

            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text "
                block
                @click="snackbar2 = true"
              >
                TOP RIGHT
              </v-btn>
              <!-- snackbar 2 -->
              <v-snackbar
                v-model="snackbar2"
                right
                top
                color="info px-5"
                height="80px"
                timeout="4000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar2 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text "
                block
                @click="snackbar3 = true"
              >
                TOP LEFT
              </v-btn>
              <!-- snackbar 3 -->
              <v-snackbar
                v-model="snackbar3"
                left
                top
                color="info px-5"
                height="80px"
                timeout="4000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar3 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>
          </v-row>

          <v-row class="text-center justify-center">
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text "
                block
                @click="snackbar4 = true"
              >
                BOTTOM LEFT
              </v-btn>
              <!-- snackbar 4 -->
              <v-snackbar
                v-model="snackbar4"
                left
                bottom
                color="pink px-5"
                height="80px"
                timeout="4000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar4 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>

            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="body-2"
                large
                color="secondary white--text"
                block
                @click="snackbar5 = true"
              >
                BOTTOM CENTER
              </v-btn>
              <!-- snackbar 5 -->
              <v-snackbar
                v-model="snackbar5"
                center
                bottom
                color="info px-5"
                height="80px"
                timeout="3000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar5 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text"
                block
                @click="snackbar6 = true"
              >
                BOTTOM RIGHT
              </v-btn>
              <!-- snackbar 6 -->
              <v-snackbar
                v-model="snackbar6"
                bottom
                right
                color="error px-5"
                height="80px"
                timeout="3000"
              >
                Welcome to
                <span class="text-uppercase caption font-weight-bold"
                  >MATERIAL DASHBOARD</span
                >
                — a beautiful admin panel for every web developer.
                <template v-slot:action="{ attrs }">
                  <v-icon text v-bind="attrs" @click="snackbar6 = false">
                    mdi-close-circle
                  </v-icon>
                </template>
              </v-snackbar>
            </v-col>
          </v-row>

          <h4 class="font-weight-light text-center my-6">Snackbar Locations</h4>

          <v-row class="text-center justify-center mb-5">
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="secondary white--text"
                block
                rounded
                @click.stop="dialog1 = true"
              >
                CLASSIC DIALOG
              </v-btn>

              <!-- dialoge 1 -->
              <v-dialog v-model="dialog1" max-width="500">
                <v-card>
                  <v-card-title class="text-center">
                    <v-card-subtitle class="text-center ps-0">
                      Dialog Title</v-card-subtitle
                    >
                    <v-spacer></v-spacer>
                    <v-icon
                      size="20"
                      class="grey--text"
                      @click="dialog1 = false"
                      >mdi-close</v-icon
                    >
                  </v-card-title>
                  <v-card-text class="subtitle-1 p-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error " text @click="dialog1 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>

            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="primary white--text "
                block
                rounded
                @click.stop="dialog2 = true"
              >
                NOTICE MODAL
              </v-btn>

              <!-- dialoge 2 -->
              <v-dialog v-model="dialog2" max-width="500">
                <v-card>
                  <v-card-title class="text-center">
                    <v-card-subtitle class="text-center ps-0">
                      Dialog Title</v-card-subtitle
                    >
                    <v-spacer></v-spacer>
                    <v-icon
                      size="20"
                      class="grey--text"
                      @click="dialog2 = false"
                      >mdi-close</v-icon
                    >
                  </v-card-title>
                  <v-card-text class="subtitle-1 p-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error " text @click="dialog2 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col md="2" sm="6" cols="12">
              <v-btn
                class="font-weight-light body-2"
                large
                color="pink white--text "
                block
                rounded
                @click.stop="dialog3 = true"
              >
                SMALL ALERT MODAL
              </v-btn>

              <!-- dialoge 3 -->
              <v-dialog v-model="dialog3" max-width="250">
                <v-card>
                  <v-card-title class="text-center">
                    <v-card-subtitle class="text-center ps-0">
                      Are you sure?</v-card-subtitle
                    >
                    <v-spacer></v-spacer>
                    <v-icon
                      size="20"
                      class="grey--text"
                      @click="dialog3 = false"
                      >mdi-close</v-icon
                    >
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success " text @click="dialog3 = false">
                      NEVERMIND
                    </v-btn>
                    <v-btn color="success" text @click="dialog3 = false">
                      YES
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      snackbar4: false,
      snackbar5: false,
      snackbar6: false,

      dialog1: false,
      dialog2: false,
      dialog3: false,
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
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.alertMain {
  position: relative !important;
  /* padding-right: 22px; */
}
.cardIconBox {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  /* position: relative; */
  position: absolute !important;
  top: -20px;
  /* margin-top: -95px; */
}
</style>
