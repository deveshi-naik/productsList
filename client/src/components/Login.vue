<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="justify-center mt-12">
          <v-card outlined height="400" width="650">
            <v-card-title class="justify-center">
              Login
            </v-card-title>
            <v-card-text>
              <form>
                <v-text-field label="E-mail" v-model="email"></v-text-field>
                <div class="error-text" v-if="$v.email.$error">
                  Please enter your email.
                </div>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="Password"
                  hint="At least 8 characters"
                ></v-text-field>
                <div class="error-text" v-if="$v.password.$error">
                  Please enter your password.
                </div>
                <v-btn class="mt-4 mr-4 success" @click="onSubmit">
                  submit
                </v-btn>
                <v-btn @click="onClear" class="mt-4">
                  clear
                </v-btn>
              </form>
            </v-card-text>
            <v-card-actions>
              Don't have an account?
              <a class="ml-2 justify-center" @click="onSignup">
                Sign up!
              </a>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }

      let userData = {
        email: this.email,
        password: this.password,
      };
      this.$api.user
        .login(
          userData
        )
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem('token', res.data.data.token)
            this.$router.push("/home");
          }
        })
        .catch((error) => {
          console.log(error);
        });

    },
    onClear() {
      this.email = "";
      this.password = "";
    },
    onSignup() {
      this.$router.push("/signup");
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  }
};
</script>

<style>
.error-text {
  color: tomato;
}
</style>
