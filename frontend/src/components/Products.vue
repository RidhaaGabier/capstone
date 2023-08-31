<template lang="">
    <div>
        <div>
        <div class="container-fluid">
          <div class="row gap-3 justify-content-center" v-if="products">
            <div v-for="product of products" :key="product.ProdID" class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4">
              <div style="width:100%;height:100%;" class="card">
                <img :src="product. ProdUrl" class="card-img-top" style="padding: 0.6rem;" height="390">
                <div class="card-body">
                  <h5 class="card-title">{{ product.ProdName}}</h5>
                  <p class="card-text">{{ product.Category}}</p>
                  <p class="card-text">{{ product.Amount }}</p>
               <router-link :to ="{name: 'product', params: {id: product.ProdID}}">See more</router-link>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align:center !important; margin-top:3rem;" v-else>
            Loading...
            <Spinner/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
export default {
    components:{
        Spinner,
    },

//   props:["product"],
//     data(){
//         return {
//             product: null,
//         }
//     },

    computed: {
        products() {
            return this.$store.state.products;
        },
//         properties() {
//       return this.$store.state.properties?.filter((property) => {
//         let isMatch = true;
//         if (!property.title.toLowerCase().includes(this.search.toLowerCase())) {
//           isMatch = false;
//         }
//         if (this.area !== "All" && this.area !== property.area) {
//           isMatch = false;
//         }
//         return isMatch;
//       });
//     },
        
//     },

    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    }
}
</script>
<style lang="">
    
</style>