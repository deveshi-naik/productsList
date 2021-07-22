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
          {{ modalType === "add" ? "Add New" : "Edit" }} Product
        </v-card-title>
        <v-card-text>
          <form>
            <v-text-field label="Name" v-model="name"></v-text-field>

            <v-select
              v-if="Categories && Categories.length > 0"
              :items="Categories"
              v-model="category"
              item-text="name"
              :item-value="'_id'"
              label="Category"
            ></v-select>

            Image
            <input
              type="file"
              id="img"
              accept="image/*"
              @change="onFileChange"
              multiple
            />

            <v-text-field
              label="Price"
              v-model="price"
              type="number"
              oninput="if(this.value < 0) this.value = 0;"
            ></v-text-field>

            <v-text-field label="Discount" v-model="discount"></v-text-field>

            <v-text-field
              label="Net Price"
              v-model="netPrice"
              type="number"
              oninput="if(this.value < 0) this.value = 0;"
            ></v-text-field>

            <v-textarea label="Description" v-model="description"></v-textarea>

            <v-btn class="mr-4 success" @click="onSubmit">
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
  name: "Modal",
  data() {
    return {
      displayFlag: false,
      name: "",
      category: "",
      image: "",
      price: "",
      discount: "",
      netPrice: "",
      description: "",
      Categories: [],
      attachment: "",
      productId: ""
    };
  },
  watch: {
    modalType: {
      immediate: true,
      handler(data) {
        return data;
      }
    }
  },
  props: ["modalType"],
  methods: {
    getCategories() {
      this.$api.products
        .getCategories()
        .then(res => {
          this.Categories = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    closeDialog() {
      this.onClear();
      this.displayFlag = false;
    },
    openDialog(data) {
      this.getCategories();
      if (data) {
        this.name = data.name;
        this.image = data.image;
        this.price = data.price;
        this.category = data.category._id;
        this.discount = data.discount;
        this.netPrice = data.netPrice;
        this.description = data.description;
        this.productId = data._id;
      }
      this.displayFlag = true;
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = e.target.files[0].name;
      this.attachment = e.target.files[0];
    },
    onSubmit() {
      let data = new FormData();
      let formData = {
        category: this.category,
        price: this.price,
        netPrice: this.netPrice,
        description: this.description,
        name: this.name,
        image: this.image
      };

      data.append("file", this.attachment);
      data.append("category", this.category);
      data.append("price", this.price);
      data.append("netPrice", this.netPrice);
      data.append("description", this.description);
      data.append("name", this.name);
      data.append("image", this.image);

      if (this.modalType === "add") {
        this.$api.products
          .addProduct(data)
          .then(res => {
            if (res.data.code === 200) {
              this.$emit("getProducts");
              this.closeDialog();
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        data.append("id", this.productId);

        this.$api.products
          .editProduct(data)
          .then(res => {
            if (res.data.code === 200) {
              this.$emit("getProducts");
              this.closeDialog();
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    onClear() {
      this.name = "";
      this.category = "";
      this.image = "";
      this.price = "";
      this.discount = "";
      this.netPrice = "";
      this.description = "";
      this.Categories = [];
      this.attachment = "";
      this.productId = "";
    }
  }
};
</script>

<style></style>
