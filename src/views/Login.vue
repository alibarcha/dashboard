

<template>
  <!--Login page -->

  <v-container class="mt-12 mb-8">
    <v-row class="justify-center">
      <v-col md="9" cols="12">
        <v-card elevation="2">
          <div class="cardTop">
            <v-sheet
              class="v-sheet--offset white--text"
              elevation="6"
              max-width="70px"
              rounded="8px"
              min-height="70px"
              color="success"
            >
              <v-icon>mdi-login</v-icon>
            </v-sheet>
            <div class="title font-weight-light flex ml-8 mt-3">Login Form</div>
          </div>

          <v-card-text class="pt-0 px-sm-12 pb-8">
            <v-form ref="form" v-model="valid" lazy-validation   @submit.prevent="login">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                color="success"
                required
                class="mt-4"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                color="success"
                required
                :append-icon="pass ? 'mdi-eye-off' : 'mdi-eye'"
                :type="pass ? 'password' : 'text'"
                @click:append="IconClick"
                class="mt-6"
              >
              </v-text-field>
              <p class="pt-2">
                You don't have an account? &nbsp;
                 <v-btn
                 text
                 color="primary"
                 height="0"
                 width="0"
                 plain
                 to="/signup"
                 >
                 Sign Up
                </v-btn>
                </p>
              <v-btn
                color="success"
                class="font-weight-light d-block ml-auto mt-5"
                large
                 type="submit"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "@/firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      pass: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 5) || "Password must be greater than 5 characters",
      ],
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    // IconClick
    IconClick() {
      this.pass = !this.pass;
    },

       // --------form login----------
    async login() {
   
      // -------------methed -----------------
      const isValid = this.$refs.form.validate();
      if (isValid) {

        await  signInWithEmailAndPassword(auth, this.email, this.password)
          .then((res) => {
            console.log("login Response :> ", res);
            
            this.$router.push('/dashboard')
          })
          .catch((e) => {
            // console.log("my error", e.message);
            alert(' OOPS ! ', e.message);
          });

      }

    },



  },
};
</script>

<style scoped>
.cardTop {
  display: flex;
}
.v-sheet--offset {
  top: -20px;
  position: relative;
  left: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
}
.v-sheet--offset i {
  font-size: 30px;
  color: white;
}
</style>





