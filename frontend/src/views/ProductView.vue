<template lang="">
  <div>
      <div class="container-fluid">
    <div class="row gap-3 justify-content-center" v-if="product"  :key="product.ProdID" :product="product">
      <div class=" text-center" >
        <div style="width:100%;height:100%;" class="card justify-content-center">
          <img :src="product.ProdUrl" class="card-img-top" style="padding: 1.6rem;" height="550">
          <div class="card-body justify-content-center">
            <h5 class="card-title">{{ product.ProdName }}</h5>
            <p class="card-text">{{ product.Category }}</p>
            <p class="card-text">R {{ product.Amount }}</p>
            <router-link class="btn" to="/products">Go Back</router-link>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align:center !important; margin-top:3rem; margin-bottom:5rem;" v-else>
      Loading...
      <SpinnerComp/>
    </div>
  </div>
  <div class="Sponsors">

<div class="trophy">
  <i class="fa-solid fa-trophy"></i>
  <h2 class="text-sponsor">High quality</h2>
  <p class="sponsors-law">Crafted from top materials</p>
</div>

<div class="tick">
  <i class="fa fa-check-circle" style="font-size:20px"></i>
  <h2 class="text-sponsor">Warranty Protection</h2>
  <p class="sponsors-law">For Over 2 Years</p>
</div>

<div class="shipping">
  <i class="fa-solid fa-truck-fast"></i>
  <h2 class="text-sponsor">Free Shipping</h2>
  <p class="sponsors-law">Orders Over R1000</p>
</div>

<div class="shipping">
  <i class="fa-solid fa-headset"></i>
  <h2 class="text-sponsor">24 / 7 Support</h2>
  <p class="sponsors-law">Dedicated Support</p>
</div>


</div>
  </div>
</template>
<script>
import SpinnerComp from '@/components/Spinner.vue';
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
    console.log(this.$route.params.id);
  },
  components:{SpinnerComp},
};
</script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
  body{
    overflow-x: hidden;
  }
 
  #featured, h2, p{
      font-family: 'REM', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  body {
   font-family: 'REM', sans-serif;
    background-color:#eaeaea;
  }
  .card-title {
margin-left: 10px;
text-align: center;
}
.card-text {
margin-left: 20px;
text-align: center;
font-size: 18px;
}
.btn{
    padding: 5px;
    background: #B88E2F;
  box-shadow: 0 0 25px #FFF3E3;
  cursor: pointer;
  width: 7%;

  }

  .btn:hover{
    box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;

  }
.card-img-top{
height: 400px;
width: 500px;
margin: auto;
border-radius: 30px;
box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;
margin-top: 2rem;
}

  .Sponsors {
  display: flex;
  justify-content: space-between;
}
.text-sponsor{
  font-size: 26px;
  color: black;
}
.sponsors-law{
  color: black;
  font-size: 16px;
}

.Sponsors div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.Sponsors div i {
  font-size: 20px;
  margin-bottom: 8px; /* Adjust spacing between icon and text */
}

  .Sponsors{
    background: #E9D5B7;
    padding:20px;
    margin-top: 5rem;
    margin-bottom: 5rem;
   
  }
  

.text-black{
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  margin-top: 3rem;
  
}

.text-blacks{
  text-align: center;
  margin-bottom: 3rem;
  font-size: 20px;
}

  </style>


  <!-- <template>
    <div class="container mt-5">
      <div class="row">
   
        <div class="col-md-6">
          <div class="product-image">
            <img :src="product.ProdUrl" alt="Product Image">
          </div>
        </div>
  
      
        <div class="col-md-6">
          <div class="product-details">
            <h1 class="product-title">{{ product.ProdName }}</h1>
            <p class="product-category">{{ product.Category }}</p>
            <p class="product-price">Price: R {{ product.Amount }}</p>
            <div class="product-description">
              <h3>Description:</h3>
              <p>{{ product.Description }}</p>
            </div>
            <div class="product-buttons">
              <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
              <router-link to="/products" class="btn btn-secondary">Back to Products</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .product-image img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .product-title {
    font-size: 36px;
    margin-top: 0;
  }
  
  .product-category {
    font-size: 18px;
    color: #888;
  }
  
  .product-price {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .product-description h3 {
    font-size: 24px;
    margin-top: 20px;
  }
  
  .product-buttons {
    margin-top: 20px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    margin-left: 10px;
  }
  
  .btn-primary:hover, .btn-secondary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style> -->
  