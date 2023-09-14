<template>
  <div>
    <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                    <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Checkout</p>
                 <a href="#" class="btn shadow__btn mb-2">Shop<i class="fa-regular fa-greater-than">Decor</i></a>
                </div>
              </section>
    <div class="checkout" v-if="cart.length > 0">
      <div class="table-responsive">
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
        </tbody>
      </table>
    </div>
      <div class="d-flex justify-content-end w-100" v-if="cart.length > 0">
      <!-- ... Existing code for displaying cart items ... -->
      <div id="grandTotal" class="text-black">Grand Total: R {{ grandTotal }}</div>
    </div>

    <form action="">
            <h2 class="heading">Billing Address:</h2>
            <h2 class="heading">Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
          <div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
          </div>
            <p></p>
            <button @click="checkout"  type="submit" class="button">Pay</button>
          </form>
    </div>
  </div>
</template>

<script>
import sweet from 'sweetalert'
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
    checkout(){
      sweet({
            title: "Checkout",
            text: "Payment Successful",
            icon: "success",
            timer: 2000
          })
    }
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

  .heading{
    text-align: center;
  }
        .container {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .text{
          font-size: 45px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group {
            display: block;
            font-weight: bold;
        }

        .form-group  {
            margin-right: 10px;
        }

    


   .prod {
    height: 5rem;
    width: 5rem;
   } 

   .checkout{
    padding: 10rem;
   }
  
   #grandTotal{
    border-top:1px solid grey;
    border-bottom:1px solid grey;
    margin-right: 5rem;
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
  @media screen and (max-width: 500px) {
  .hero-inner {
    font-size: 37px !important;
  }
  .text-black {
    font-size: 18px !important;
  }
  .btn {
    font-size: 10px !important;
  }
  .table {
    font-size: 12px !important;
  }
  .prod {
    height: 3rem;
    width: 3rem;
  }
  .checkout {
    padding: 0.5rem;
  }
  #grandTotal {
    margin-right: 0;
  }
  .container {
    max-width: 100%;
    padding: 0.5rem;
  }
   
}
/* css for card */
.rightside {
    background-color: #ffffff;
	width: 35rem;
	border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem 3rem 3rem;
}

/* p{
    display:block;
    font-size: 1.1rem;
    font-weight: 400;
    margin: .8rem 0;
} */

.inputbox
{
    color:#030303;
	width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1.5px solid #ccc;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    font-family: 'Roboto', sans-serif;
    color: #615a5a;
    font-size: 1.1rem;
    font-weight: 500;
  outline:none;
}

.expcvv {
    display:flex;
    justify-content: space-between;
    padding-top: 0.6rem;
}

.expcvv_text{
    padding-right: 1.2rem;
}
.expcvv_text2{
    padding:0 1.2rem;
}

.button{
   
    padding: 10px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 10px;
    width:10%;
    letter-spacing: .11rem;
    outline:none;
  
}

.button:hover
{
	transform: scale(1.05) translateY(-3px);
    box-shadow: 2px 2px 3px #38373785;
}

@media only screen and (max-width: 1000px) {
    .card{
        flex-direction: column;
        width: auto;
      
    }

   

    .rightside{
        width:auto;
        border-bottom-left-radius: 1.5rem;
        padding:0.5rem 3rem 3rem 2rem;
      border-radius:0;
    }
}
</style>