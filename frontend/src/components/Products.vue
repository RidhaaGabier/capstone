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
                  <p class="card-text">R {{ product.Amount }}</p>
               <router-link class="btn" :to ="{name: 'product', params: {id: product.ProdID}}">See more</router-link>
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
<style scoped>
    
.card{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius:5px;
  cursor:pointer;
}

.card .card-img-top{
   border-radius:4px;
   transition: 0.9s;
}

.card:hover .card-img-top{
  transform:scale(1.2);
  border-top-right-radius:50px;
  border-top-left-radius:50px;
  margin-bottom: 1rem;
}
.card{
   width:100%;
  height:100%;
  position:relative;
  overflow:hidden;
}
.btn{
  color: black!important;
  text-decoration: none;
  background: #918989af;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
 font-weight: 500;
}
.btn:hover{
  background: #918989af;
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9 !important;
}
</style>