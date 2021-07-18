<template>
  <div>
    <v-app>
      <v-container>
        <v-app-bar
          color="deep-purple accent-4 justify-center"
          height="80"
          dense
          dark
        >
          <v-toolbar-title class="mr-5">Welcome to Home Page</v-toolbar-title>
          <v-btn class="justify-end " color="normal" outlined @click="onAdd">
            Add
          </v-btn>
        </v-app-bar>
        <v-row class="mt-6 justify-center">
          <h3>
            Products
          </h3>
        </v-row>
        <v-row class="justify-center mt-12">
          <v-card outlined height="400" width="350" class="mx-3">
            <v-card-title class="justify-center" @click="onCardClick">
              product name
            </v-card-title>
            <v-img
              height="250"
              @click="onCardClick"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="d-flex justify-center">
              <v-btn class="mr-4 primary" @click="onEdit">
                Edit
              </v-btn>
              <v-btn @click="onDelete" class="error">
                Delete
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card outlined height="400" width="350" class="mx-3">
            <v-card-title class="justify-center" @click="onCardClick">
              product name
            </v-card-title>
            <v-img
              @click="onCardClick"
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="d-flex justify-center">
              <v-btn class="mr-4 primary" @click="onEdit">
                Edit
              </v-btn>
              <v-btn @click="onDelete" class="error">
                Delete
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card outlined height="400" width="350" class="mx-3">
            <v-card-title class="justify-center" @click="onCardClick">
              product name
            </v-card-title>
            <v-img
              height="250"
              @click="onCardClick"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="d-flex justify-center">
              <v-btn class="mr-4 primary" @click="onEdit">
                Edit
              </v-btn>
              <v-btn @click="onDelete" class="error">
                Delete
              </v-btn>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
    <AddModal ref="addModal"></AddModal>
  </div>
</template>

<script>
import AddModal from "./AddModal";

export default {
  data() {
    return {
      showAddModal: false
    };
  },
  components: {
    AddModal
  },
  methods: {
    onAdd() {
      this.$refs.addModal.openDialog();
    },
    onEdit() {
      this.$refs.addModal.openDialog();
    },
    onDelete() {},
    onCardClick() {
      this.$router.push("/detail");
    }
  }
};
</script>

<style></style>
