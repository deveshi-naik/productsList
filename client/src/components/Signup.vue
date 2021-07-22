<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="justify-center mt-12">
          <v-card outlined height="500" width="650">
            <v-card-title class="justify-center">
              Sign up
            </v-card-title>
            <v-card-text>
              <form>
                <v-text-field label=" Name" v-model="name"></v-text-field>

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
                  Please enter valid password.
                </div>

                <v-text-field
                  v-model="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  hint="At least 8 characters"
                ></v-text-field>
                <div class="error-text" v-if="$v.password.$error">
                  Please enter text same as password.
                </div>

                <v-btn class="mt-4 mr-4 success" @click="onSubmit">
                  submit
                </v-btn>

                <v-btn class="mt-4" @click="onClear">
                  clear
                </v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
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
        name: this.name,
        password: this.password
      };
      this.$api.user
        .register(userData)
        .then(res => {
          if (res.data.code === 200) {
            this.$router.push("/login");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClear() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { required, sameAsPassword: sameAs("password") }
  }
};
</script>

<style>
.error-text {
  color: tomato;
}
</style>
