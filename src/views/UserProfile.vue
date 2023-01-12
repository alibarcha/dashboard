<template>
  <!--user profile-->
  <v-container fluid class="my-12">
    <v-row>
      <v-col lg="7" cols="12">
        <v-card elevation="2">
          <v-sheet
            class="v-sheet--offset white--text"
            elevation="6"
            max-width="calc(100% - 35px)"
            rounded="8px"
            min-height="80px"
            color="success"
          >
            <p class="body-1 font-weight-light mb-0">Edit Profile</p>
            <div class="body-2 font-weight-light">Complete your profile</div>
          </v-sheet>

          <v-card-text class="px-5 pt-0 pb-3">
            <v-row class="font-weight-light">
              <v-col sm="4" cols="12">
                <v-text-field
                  label="Campany"
                  color="success"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col sm="4" cols="12">
                <v-text-field label="User Name" color="success"></v-text-field>
              </v-col>
              <v-col sm="4" cols="12">
                <v-text-field
                  label="Email Address"
                  color="success"
                ></v-text-field>
              </v-col>

              <v-col sm="6" cols="12">
                <v-text-field label="First Name" color="success"></v-text-field>
              </v-col>
              <v-col sm="6" cols="12">
                <v-text-field label="Last Name" color="success"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Address" color="success"></v-text-field>
              </v-col>

              <v-col sm="4" cols="12">
                <v-text-field label="City" color="success"></v-text-field>
              </v-col>
              <v-col sm="4" cols="12">
                <v-text-field label="Country" color="success"></v-text-field>
              </v-col>
              <v-col sm="4" cols="12">
                <v-text-field
                  label="Postal Code"
                  color="success"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  name="input-7-1"
                  label="About Me"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
                  color="success"
                  rows="3"
                ></v-textarea>
              </v-col>
              <v-col class="text-end mb-3">
                <v-btn color="success" large> UPDATE PROFILE </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="5" cols="12" class="text-center my-lg-0 my-16">
        <v-card elevation="2" class="px-lg-12 cardBox">
          <v-card-text class="pb-8">
            <v-avatar width="130px" height="130px" class="riundedImg">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <h6 class="body-1 grey--text">CEO / CO-FOUNDER</h6>
            <h4 class="title font-weight-light mb-3 black--text">
              Alec Thompson
            </h4>
            <p class="font-weight-light subtitle-1 grey--text">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
            <v-btn rounded large color="success" dark> FOLLOW </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserProfile",
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
.riundedImg {
  margin-top: -70px;
  margin-bottom: 35px;
}
</style>
