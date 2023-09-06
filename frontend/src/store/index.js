import { createStore } from 'vuex'
import axios from "axios";
const Poki = 'https://capstone-8rni.onrender.com/';

export default createStore({
  state: {
    products: null,
    product: null,
    Users: null || JSON.parse(localStorage.getItem("user")),
    User:null, 
    token: null || localStorage.getItem("token"),
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
      state.user = user
      localStorage.setItem("user", JSON.stringify(user));
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
    
  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`${Poki}products`);
        let{ results }  = await response.json();
        context.commit("SET_PRODUCTS", results);
        console.log(results)
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchProduct(context, id) {
      try {
        let response = await fetch(`${Poki}product/${id}`);
        let {result} = await response.json();
        context.commit("SET_PRODUCT", result[0]);
      } catch (error) {
        alert(error.message);
      }
    },
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
    deleteProduct(context,ProdID) {
      
         axios.delete(`https://capstone-8rni.onrender.com/product/${ProdID}`)
         .then(response => {
          context.dispatch("fetchProducts");
         })
       .catch (err => {
        alert(err);
      })
    },
   

    //USER ONE
    async fetchUsers(context) {
      try {
        let response = await fetch(`${Poki}users`);
        let{ results }  = await response.json();
        context.commit("setUsers", results);
        console.log(results)
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchUser(context, id) {
      try {
        let response = await fetch(`${Poki}user/${id}`);
        let {result} = await response.json();
        context.commit("setUser", result[0]);
      } catch (error) {
        alert(error.message);
      }
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
    // async updateProducts(payload, ProdID) {
    //   try {
    //     const response = await axios.patch(`https://capstone-8rni.onrender.com/products/${ProdID}`, payload);
    //     const productToEdit = response.data;
    //     console.log("reached")


    //     this.$store.commit('SET_PRODUCTS', productToEdit);

    //   } catch (error) {
    //     console.error(error);

    //   }
    // },
    // async updateUsers() {
    //   try {
    //     const response = await axios.get(`https://capstone-8rni.onrender.com/Users`);
    //     const productToEdit = response.data;


    //     this.$store.commit('setUsers', productToEdit);

    //   } catch (error) {
    //     console.error(error);

    //   }
    // },
  },
 
})
