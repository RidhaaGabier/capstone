<template>
    <div v-if="active">
      <div class="container flex-container" v-if="product">
        
        <label for="quantity">ProdID</label>
        <input type="text" autocomplete="off" required id="prodId" name="ProdID" v-model="product.ProdID"
          :placeholder="product.ProdID" />
  
  
        <label for="productName">Name</label>
        <input type="text" autocomplete="off" required id="ProdName" name="ProdName" v-model="product.ProdName"
          :placeholder="product.ProdName" />
  
        <label for="quantity">Quantity</label>
        <input type="text" autocomplete="off" required id="Quantity" name="Quantity" v-model="product.Quantity"
          :placeholder="product.Quantity" />
  
        <label for="quantity">Price</label>
        <input type="text" autocomplete="off" required id="Amount" name="Amount" v-model="product.Amount"
          :placeholder="product.Amount" />
  
        <label for="quantity">Category</label>
        <input type="text" autocomplete="off" required id="Category" name="Category" v-model="product.Category"
          :placeholder="product.Category" />
  
        <label for="image">Image</label>
        <input type="text" autocomplete="off" required id="ProdURL" name="ProdURL" v-model="product.ProdUrl"
          :placeholder="product.ProdURL" />
  
        <button @click="updateProduct(product.ProdID)" class="btn-submit">
          Submit
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
  
        ProdID: '',
        ProdName: "",
        Quantity: "",
        Amount: "",
        Category: "",
        ProdUrl: "",
  
        active: false
  
      };
    },
    methods: {
      async updateProduct() {
        try {
          await axios.put(
            `https://capstone-8rni.onrender.com/${this.$route.params.id}`,
            {
              ProdName: this.product.ProdName,
              Quantity: this.product.Quantity,
              Amount: this.product.Amount,
              Category: this.product.Category,
              ProdUrl: this.product.ProdUrl,
  
            }
          );
          this.ProdName = "";
          this.Quantity = "";
          this.Amount = "";
          this.Category = "";
          this.ProdUrl = "";
  
  
          this.$router.push("/admin");
        } catch (err) {
          console.log(err);
        }
      },
    },
    props: ["id"],
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
    mounted() {
      this.$store.dispatch("getProduct", this.ProdID)
      this.$store.dispatch("getProducts");
    },
  };
  </script>
  
  <style scoped></style>