

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
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="login"
            >
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
                Login
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
              <!-- Forms snackbars -->
              <v-snackbar v-model="snackbar" color="error" top timeout="50000">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
              <!-- snackbar end -->
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "@/firebaseConfig";
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

      loading: false,
      // alerts data
      snackbar: false,
      text: `Please first Signup then Login the page...`,
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
        this.loading = true;
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then((res) => {
            console.log("login Response :> ", res);
            this.loading = false;
            this.$router.push("/");
          })
          .catch(() => {
            this.loading = false;
            this.snackbar = true;
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

<style>
/* loader button */
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>





