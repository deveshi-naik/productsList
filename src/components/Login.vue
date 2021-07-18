<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="justify-center mt-12">
          <v-card outlined height="350" width="650">
            <v-card-title class="justify-center">
              Login
            </v-card-title>
            <v-card-text>
              <form>
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
                <v-btn class="mr-4 success" @click="onSubmit">
                  submit
                </v-btn>
                <v-btn @click="onClear">
                  clear
                </v-btn>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="onSignup"
              >
                Sign up!
              </v-btn>
            </v-card-actions>
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
      email: "",
      password: "",
    };
  },
  methods : {
    onSubmit() {
      this.$router.push('/home')
    },
    onClear() {
      this.email = ''
      this.password = ''
    },
    onSignup() {
      this.$router.push('/signup')
    }
  }
};
</script>

<style></style>
