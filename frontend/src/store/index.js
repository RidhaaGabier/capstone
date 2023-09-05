import { createStore } from 'vuex'
const Poki ='https://capstone-8rni.onrender.com/';

export default createStore({
  state: {
    products: null,
    product: null,
    Users: null,
    User:null,
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
    },
    setToken(state, token) {
      state.token = token;
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
        let response = await fetch(`${Poki}products/${id}`);
        let results = await response.json();
        context.commit("SET_PRODUCT", results);
      } catch (error) {
        alert(error.message);
      }
    },
  },
 
})
