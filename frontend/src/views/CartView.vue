<template>
  <div>
    <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                    <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Cart</p>
                 <a href="#" class="btn shadow__btn mb-2">Shop<i class="fa-regular fa-greater-than">Decor</i></a>
                </div>
              </section>
    <div v-if="cart.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product.ProdID">
            <td>{{ item.product.ProdID }}</td>
            <td>{{ item.product.ProdName }}</td>
            <td>{{ item.product.Category }}</td>
            <td><img class="prod" :src="item.product.ProdUrl" alt=""></td>
            <td>R {{ item.product.Amount }}</td>
            <td>

              <button @click="RemoveItem(item)" class="btn btn-sm btn-secondary">-</button>
              {{ item.product.Quantity }}
              <button @click="AddItem(item)" class="btn btn-sm btn-secondary">+</button>
            </td>
            <td>R {{ calculateTotal(item) }}</td>
            <td>
              <button @click="deleteProduct(item.product.ProdID)" class="btn btn-sm btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <div v-if="cart.length > 0">
          <!-- ... Existing code for displaying cart items ... -->
          <div class="text-black">Grand Total: R {{ grandTotal }}</div>
        </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Initialize cart data
    };
  },
  created() {
    // Retrieve cart data from local storage or your store
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.cart = cart;
  },
  methods: {
    AddItem(item) {
      item.product.Quantity++;
      this.saveCart();
    },
    RemoveItem(item) {
      if (item.product.Quantity > 1) {
        item.product.Quantity--;
        this.saveCart();
      }
    },
    deleteProduct(productId) {
      // Implement the logic to remove the product from the cart
      // You can update the cart array and then save it to local storage
      // Example: 
      const updatedCart = this.cart.filter(item => item.product.ProdID !== productId);
      this.cart = updatedCart; // Update the cart in the data model
      this.saveCart();
    },
    saveCart() {
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    calculateTotal(item) {
      // Calculate the total price for an item based on its quantity
      return item.product.Amount * item.product.Quantity;
    },
  },
  computed: {
  grandTotal() {
    let total = 0;
    for (const item of this.cart) {
      total += this.calculateTotal(item);
    }
    return total;
  },
}
};
</script>

<style scoped>
   .prod {
    height: 5rem;
    width: 5rem;
   } 
   .hero {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(https://i.postimg.cc/y8yHbMPv/shoe-sneaker-mockup-psfiles-758x569.jpg); */
  background-image: url(https://i.postimg.cc/Kv6FByBX/new-walll-light.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-weight: 600;
  font-size: 50px;
  font-family: 'REM', sans-serif;
  }
  .hero{
    width: auto;
  }
  .hero-inner{
  font-size:65px;
  /* background-color: #E9D5B7; */
  color: black;
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
  .container{
    width:900px;
    margin:0px auto;
  }
  .text-black{
  text-align: center;
  font-weight: bold;
  margin: 3rem;
  font-size: 25px !important;
  
}
.shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: black;
    border-radius: 7px;
    letter-spacing: 6px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
  }
</style>