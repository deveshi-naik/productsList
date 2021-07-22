<template>
  <div>
    <v-app>
      <v-container>
        <v-row class="mt-6 justify-center" v-if="productData">
          <h2>
            Product Detail!
          </h2>
        </v-row>
        <v-card v-if="productData">
          <v-row class="justify-center mt-12">
            <v-col>
              <v-img height="350" :src="getImgUrl(productData.image)"></v-img>
            </v-col>
            <v-col>
              <div>
                <h3 class="d-flex justify-center">
                  {{ productData.name }}
                </h3>
                <p>
                  Category Name:
                  <span class="font-weight-bold">{{
                    productData.category.name
                  }}</span>
                </p>
                <p>
                  Discount:
                  <span class="font-weight-bold">{{
                    productData.discount
                  }}</span>
                </p>
                <p>
                  Price:
                  <span class="font-weight-bold">{{ productData.price }}</span>
                </p>
                <p>
                  Net Price:
                  <span class="font-weight-bold">{{
                    productData.netPrice
                  }}</span>
                </p>
                <p>
                  Description:
                  <span class="font-weight-bold">{{
                    productData.description
                  }}</span>
                </p>
              </div>
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
      productData: "",
      baseURL: "http://localhost:3000"
    };
  },
  methods: {
    getImgUrl(pic) {
      return this.baseURL + "/" + pic;
    },
    getProductData() {
      this.$api.products
        .getProductByID(this.$route.params.id)
        .then(res => {
          this.productData = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getProductData();
  }
};
</script>

<style></style>
