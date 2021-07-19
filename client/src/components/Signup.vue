<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="justify-center mt-12">
          <v-card outlined height="450" width="650">
            <v-card-title class="justify-center">
              Sign up
            </v-card-title>
            <v-card-text>
              <form>
                <v-text-field
                  label=" Name"
                  required
                  v-model="name"
                ></v-text-field>

                <v-text-field
                  label="E-mail"
                  required
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  hint="At least 8 characters"
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  hint="At least 8 characters"
                ></v-text-field>

                <v-btn class="mr-4 success" @click="onSubmit">
                  submit
                </v-btn>

                <v-btn @click="onClear">
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
      this.$router.push("/login");
    },
    onClear() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    }
  }
};
</script>

<style></style>
