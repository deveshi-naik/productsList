<template>
  <div>
    <v-dialog
      v-model="displayFlag"
      width="700"
      height="500"
      @click:outside="closeDialog"
    >
      <v-card outlined>
        <v-card-title class="justify-center">
          Add New Product
        </v-card-title>
        <v-card-text>
          <form>
            <v-text-field label="Name" required v-model="name"></v-text-field>

            <v-text-field
              label="Category"
              required
              v-model="category"
            ></v-text-field>

            <v-text-field label="Image" required v-model="image"></v-text-field>

            <v-text-field label="Price" required v-model="price"></v-text-field>

            <v-text-field
              label="Discount"
              required
              v-model="discount"
            ></v-text-field>

            <v-text-field
              label="Net Price"
              required
              v-model="netPrice"
            ></v-text-field>

            <v-text-field
              label="Description"
              required
              v-model="description"
            ></v-text-field>

            <v-btn class="mr-4 success" @click="onAdd">
              submit
            </v-btn>

            <v-btn @click="onClear">
              clear
            </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddModal",
  data() {
    return {
      displayFlag: false,
      name: "",
      category: "",
      image: "",
      price: "",
      discount: "",
      netPrice: "",
      description: ""
    };
  },
  methods: {
    closeDialog() {
      this.displayFlag = false;
    },
    openDialog() {
      this.onClear();
      this.displayFlag = true;
    },
    onAdd() {
      console.log("on add");
    },
    onClear() {
      this.name = "";
      this.category = "";
      this.image = "";
      this.price = "";
      this.discount = "";
      this.netPrice = "";
      this.description = "";
    }
  }
};
</script>

<style></style>
