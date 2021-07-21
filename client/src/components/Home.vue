<template>
  <div>
    <v-app>
      <v-container>
        <v-app-bar color="deep-purple accent-4" height="80" dense dark>
          <v-row>
            <v-col>
              <v-btn color="normal" outlined @click="onAdd">
                Add Product
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-toolbar-title>
                Welcome to Home Page
              </v-toolbar-title>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn color="normal" outlined @click="onSignOut">
                Signout
              </v-btn>
            </v-col>
          </v-row>
        </v-app-bar>
        <v-row class="mt-6 justify-center">
          <h2>
            Products
          </h2>
        </v-row>
        <v-row
          class="justify-center mt-12"
          v-if="Products && Products.length > 0"
        >
          <v-card
            outlined
            height="400"
            width="350"
            class="mx-3"
            v-for="(product, index) in Products"
            :key="index"
          >
            <v-card-title
              class="justify-center"
              @click="onCardClick(product._id)"
            >
              {{ product.name }}
            </v-card-title>
            <v-img
              height="250"
              @click="onCardClick(product._id)"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="d-flex justify-center">
              <v-btn class="mr-4 primary" @click="onEdit(product)">
                Edit
              </v-btn>
              <v-btn @click="onDelete(product._id)" class="error">
                Delete
              </v-btn>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
    <AddModal
      ref="addModal"
      @getProducts="getProductsData"
      :modalType="modalType"
    ></AddModal>
  </div>
</template>

<script>
import AddModal from "./AddModal";
import { setAuthToken } from "../services/api";

export default {
  data() {
    return {
      showAddModal: false,
      Products: [],
      modalType: ""
    };
  },
  components: {
    AddModal
  },
  created() {
    setAuthToken(localStorage.getItem("token"));
    this.getProductsData();
  },
  methods: {
    getProductsData() {
      this.$api.products
        .getProducts()
        .then(res => {
          this.Products = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onAdd() {
      this.modalType = "add";
      this.$refs.addModal.openDialog();
    },
    onEdit(data) {
      this.modalType = "edit";
      this.$refs.addModal.openDialog(data);
    },
    onDelete(id) {
      let payload = { id };
      this.$api.products
        .deleteProduct(payload)
        .then(res => {
          this.getProductsData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    onCardClick(id) {
      this.$router.push(`/detail/${id}`);
    },
    onSignOut() {
      setAuthToken();
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
