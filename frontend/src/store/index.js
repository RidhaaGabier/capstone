import { createStore } from 'vuex'
const Poki ='https://capstone-8rni.onrender.com/';

export default createStore({
  state: {
    products: null,
    product: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, productData) {
      state.product = productData;
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
