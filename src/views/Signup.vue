

<template>
  <!--Signup page -->

  <v-container class="mt-12 mb-8">
    <v-row class="justify-center">
      <v-col md="9" cols="12">
        <v-card elevation="2" class="animate__animated animate__fadeInLeft animate__faster">
          <div class="cardTop">
            <v-sheet
              class="v-sheet--offset white--text"
              elevation="6"
              max-width="70px"
              rounded="8px"
              min-height="70px"
              color="success"
            >
              <v-icon>mdi-card-account-details</v-icon>
            </v-sheet>
            <div class="title font-weight-light flex ml-8 mt-3">
              Signup Form
            </div>
          </div>

          <v-card-text class="pt-0 px-sm-12 pb-8">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="register"
            >
              <v-text-field
                v-model="name"
                :counter="15"
                :rules="nameRules"
                label="User Name"
                color="success"
                required
                class="mt-4"
              ></v-text-field>

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
                class="mt-4"
                :append-icon="pass ? 'mdi-eye-off' : 'mdi-eye'"
                :type="pass ? 'password' : 'text'"
                @click:append="IconClick"
              >
              </v-text-field>
              <p class="pt-2">
                Already have an account?
                <v-btn
                  text
                  color="primary"
                  height="0"
                  width="0"
                  plain
                  to="/login"
                >
                  Login
                </v-btn>
              </p>
              <!-- submit -->
              <v-btn
                class="font-weight-light d-block ml-auto mt-5"
                large
                type="submit"
                :loading="loading"
                :disabled="loading"
                color="success"
                @click="loader = 'loading'"
              >
                Signup
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <!-- Forms snackbars -->
              <v-snackbar v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      password: "",
      pass: true,

      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 5) || "Password must be greater than 5 characters",
      ],
      loading: false,
      // alerts data
      snackbar: false,
      text: `You hav Successfully Signup !`,
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

    // formSubmit
    async register() {
      // -------------methed 1----------

      // const response = await createUserWithEmailAndPassword(auth, this.email, this.password)
      // if (response) {
      //      console.log("user", response)
      //       alert('Successfully registered! Please login.');
      //        this.$router.push('/');
      //   } else {
      //       // throw new Error('Unable to register user')
      //       console.log('error')
      //         alert('Please enter valid data');
      //   }

      // -------------methed 2-----------------

      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.loading = true;
        this.snackbar = true;
        await createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((res) => {
            // console.log("Signup Response :> ", res);
            // alert("You have Successfull Sign Up !...");
            localStorage.setItem("response", JSON.stringify(res));
            this.loading = false;
            this.snackbar = true;
            this.$router.push("/login");
            this.$refs.form.resetValidation();
            this.email = "";
            this.password = "";
            this.name = "";
          })
          .catch(() => {
            this.loading = false;
            // console.log("my error", e.message);
          });
      }
    },
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
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





