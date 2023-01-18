<template>
  <!-- google maps -->
  <v-container fluid class="mt-12 mb-8">
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="calc(100% - 35px)"
            rounded="8px"
            min-height="80px"
            color="success"
          >
            <p class="subtitle font-weight-light mb-0">Satellite Map</p>
          </v-sheet>

          <v-card-text class="px-5 pt-0 pb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26356315.701909266!2d-113.65984645545673!3d36.25591957613731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sus!4v1566158729223!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              style="border: 0px"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col lg="6" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="calc(100% - 35px)"
            rounded="8px"
            min-height="80px"
            color="success"
          >
            <p class="subtitle font-weight-light mb-0">Satellite Map</p>
          </v-sheet>

          <v-card-text class="px-5 pt-0 pb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              style="border: 0px"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="6" cols="12" class="mt-lg-0 mt-12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="calc(100% - 35px)"
            rounded="8px"
            min-height="80px"
            color="success"
          >
            <p class="subtitle font-weight-light mb-0">
              Custom Skin & Settings Map
            </p>
          </v-sheet>

          <v-card-text class="px-5 pt-0 pb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              style="border: 0px"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GoogleMaps",
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
  align-items: center;
}
</style>
