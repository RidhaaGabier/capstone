<template>
    <div>
      <div class="container flex-container">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Update</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form @submit.prevent="updateProduct">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name</label>
            <input type="text" class="form-control" id="recipient-na" autocomplete="off" required  v-model="product.ProdName">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Quantity</label>
            <input type="text" class="form-control" id="recipient-na" autocomplete="off" required  v-model="product.Quantity" >
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Price</label>
            <input type="number" class="form-control" id="recipient-na" autocomplete="off" required v-model="product.Amount"  >
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Category</label>
            <input type="text" class="form-control" id="recipient-na" autocomplete="off" required  v-model="product.Category" >
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Image</label>
            <input type="text" class="form-control" id="recipient-na" autocomplete="off" required v-model="product.ProdUrl" >
          </div>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateProduct" type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
  
  
       
  
  
  
      
      </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'updateProductsComp',
    props: ['product'],
    data() {
      return {
       
          // product: {
          // // Make sure to include a prop for prodID or remove it if not needed
          //   ProdName: '',
          //   Quantity: '',
          //   Amount: '',
          //   Category: '', // 'category' should be 'Category' to match the v-model
          //   ProdUrl: '',
          // }
        
      };
    },
    methods: {
      updateProduct() {
        this.$store.dispatch("updateProduct",this.product)
      },
    }
  };
  </script>

  <style scoped>
  .btn .btn-primary{
    align-content: center;
    text-align: center;
    justify-content: space-between;
    justify-content: center;
  }
 </style>