import { createStore } from 'vuex'
import axios from "axios";
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
import router from '@/router';
import authenticateUser from '@/services/AuthenticateUser';
const dataUrl = 'https://capstone-8rni.onrender.com/';

export default createStore({
  state: {
    products: [],
    product: null,
    users: null,
    user:null || JSON.parse(localStorage.getItem("user")) ,
    token:  null,
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, productData) {
      state.product = productData;
    },
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user.result
      localStorage.setItem("user", JSON.stringify(user.result));
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setSpinner(state, products) {
      state.showSpinner = products;
    },
    sortPropertiesByPrice: (state) => {
      state.properties.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.properties.reverse();
      }
      state.asc = !state.asc;
    },
    setCart(state, data){
      state.cart = data
    }
    
  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`${dataUrl}products`);
        let{ results }  = await response.json();
        context.commit("SET_PRODUCTS", results);
        console.log(results)
      } catch (error) {
        alert(error.message);
      }
    },
    // fetches users
    // async fetchUsers(context) {
    //   try {
    //     let response = await fetch(`${dataUrl}users`);
    //     let{ results }  = await response.json();
    //     context.commit("setUsers", results);
    //     console.log(results)
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // },
    async fetchProduct(context, id) {
      try {
        let response = await fetch(`${dataUrl}product/${id}`);
        let {result} = await response.json();
        context.commit("SET_PRODUCT", result[0]);
      } catch (error) {
        alert(error.message);
      }
    },
    // fetch a single user
    // async fetchUser(context, id) {
    //   try {
    //     let response = await fetch(`${dataUrl}user/${id}`);
    //     let {result} = await response.json();
    //     context.commit("setUser", result[0]);
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // },
    addProduct(context,payload) {
      axios.post("https://capstone-8rni.onrender.com/product", payload)
        .then(response => {
          console.log("Product added:", response.data);
          context.dispatch("fetchProducts")
        })
        .catch(error => {
          console.error("Error adding product:", error);
          alert("An error occurred while adding the product.");
        });
        alert("Item has been added.")
    },

    async updateProducts(context, payload) {
      try {
        const response = await axios.patch(`https://capstone-8rni.onrender.com/product/${payload.ProdID}`, payload);
        const productToEdit = response.data;
        context.dispatch("fetchProducts");
        sweet({
          title: "Product Updated",
          text: productToEdit.msg,
          icon: "success",
          timer: 2000
        })
      } catch (error) {
        console.error(error);
      }
    },

    deleteProduct(context,ProdID) {
      
      axios.delete(`https://capstone-8rni.onrender.com/product/${ProdID}`)
      .then(response => {
       context.dispatch("fetchProducts");
      })
    .catch (err => {
     alert(err);
   })
 },

 async fetchUsers(context) {
  try {
    let response = await fetch(`${dataUrl}users`);
    let data  = await response.json();
    console.log(data.results)
    context.commit("setUsers", data.results);
  } catch (error) {
    alert(error.message);
  }
},
async fetchUser(context, id) {
  try {
    let response = await fetch(`${dataUrl}user/${id}`);
    let {result} = await response.json();
    alert(result[0])
    context.commit("setUser", result[0]);
  } catch (error) {
    alert(error.message);
  }
},

    // Adds a User
    addUser(context,payload) {
      axios.post("https://capstone-8rni.onrender.com/register", payload)
        .then(response => {
          console.log("User added:", response.data);
          context.dispatch("fetchUsers")
        })
        .catch(error => {
          console.error("Error adding user:", error);
          alert("An error occurred while adding the user.");
        });
        alert("New user has been added.")
    },


    async updateUsers(context, payload) {
      try {
        const response = await axios.patch(`https://capstone-8rni.onrender.com/user/${payload.UserID}`, payload); 
        // const response = await axios.patch(`http://localhost:3000/user/${payload.UserID}`, payload); 
        const {msg} = response.data;
        if(msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "User Updated",
            text: msg,
            icon: "success",
            timer: 2000
          })
        }else {
          sweet({
            title: "error",
            text: msg,
            icon: "error",
            timer: 2000
          })
        }
      } catch (error) {
        console.error(error);
      }
    },

    // Deletes a user
    deleteUser(context,UserID) {
      
      axios.delete(`https://capstone-8rni.onrender.com/user/${UserID}`)
      .then(response => {
       context.dispatch("fetchUsers");
      })
    .catch (err => {
     alert(err);
   })
 },
   

    //USER ONE

    // log out
    async logOut(context) {
      context.state.user = null
      localStorage.removeItem('user')
      cookies.remove('LegitUser'); //removes the cookie
    },

   // login
   async loginUser(context, payload) {
    try {
      const results = await axios.post(`${dataUrl}login`, payload)
      
      let {msg,token, result} = results.data
      console.log(result);
        if(result) {
          context.commit("setUser", {result,msg});
          cookies.set("LegitUser", {token, msg, result})
          authenticateUser.applyToken(token)
          sweet({
            title: "Login",
            text: msg,
            icon: "success",
            timer: 2000
          })
          router.push({name: 'home'})
        }
        else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000
          })
        }
    } catch(error) {
      context.commit("setMsg", "An error has occurred.")
      };
  },



    // register
    async registerUser(context,payload) {
      try {
        const {msg} = ( await axios.post(`${dataUrl}register`, payload)).data
          if(msg) {
            sweet({
              title: "Register",
              text: msg,
              icon: "success",
              timer: 2000
            })
            context.dispatch('fetchUsers')
            router.push({name: 'login'})
          }
          else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 2000
            })
          }
      } catch(error) {
        context.commit("setMsg", "An error has occurred.")
        };
    },

   
    // async deleteUser(payload, UserID) {
    //   try {
    //     await axios.delete(`https://capstone-8rni.onrender.com/User/${UserID}`, payload);
    //     this.$store.dispatch("getUsers");
    //   } catch (err) {
    //     alert(err);
    //   }
    // },
    // async deleteUser(payload, UserID) {
    //   try {
    //     await axios.delete(`https://capstone-8rni.onrender.com/Users/${UserID}`, payload);
    //     this.$store.dispatch("getUsers");
    //   } catch (err) {
    //     alert(err);
    //   }
    // },
 

  },

  fetchCart({commit}){
    
    const data = JSON.parse(localStorage.getItem('cart'))
    console.log(data);

    if(data){
      commit('setCart', data)
    }
  }
 
})
