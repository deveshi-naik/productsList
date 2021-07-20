<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="mt-6 justify-center" v-if="productData">
          <h3>
            Product Detail!
          </h3>
        </v-row>
        <v-card v-if="productData">
          <v-row class="justify-center mt-12">
            <v-col>
              <v-img
                height="350"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </v-col>
            <v-col>
              Product Details are here!!!!
              Name: {{ productData.name }}
              Discount: {{ productData.discount }}
              Price: {{ productData.price }}
              Net Price: {{ productData.netPrice }}
              Description: {{ productData.description }}
              Category Name: {{ productData.category.name }}
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: ''
    }
  },
  methods: {
    getProductData() {
      this.$api.products
        .getProductByID(this.$route.params.id)
        .then((res) => {
          this.productData = res.data.data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.getProductData()
  },
};
</script>

<style></style>
