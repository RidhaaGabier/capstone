<template>
    <div class="container-fluid p-0">
      <!--hero-->
      <section class="overflow-x-hidden hero m-0 align-content-sm-start">
        <div class="hero-inner text-center">
          <img
            src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png"
            alt=""
          />
          <p class="text">Search</p>
          <a href="#" class="btn shadow__btn mb-2"
            >Item<i class="fa-regular fa-greater-than">Decor</i></a
          >
        </div>
      </section>
  
      <div class="sort-filter-container">
          <label class="search" for="search">Search By Name:</label>
          <input
          style="border-radius: 10px;"
            type="text"
            id="search"
            v-model="search"
          />
       
      </div>
  
      <!-- Products -->
      <div>
        <div>
          <div class="container-fluid">
            <div
              class="row gap-3 justify-content-center"
              v-if="products.length > 0"
            >
              <div
                v-for="product of products"
                :key="product.ProdID"
                class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4"
              >
                <div style="width: 100%; height: 100%" class="card">
                  <img
                    :src="product.ProdUrl"
                    class="card-img-top"
                    style="padding: 0.6rem"
                    height="390"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ product.ProdName }}</h5>
                    <p class="card-text">{{ product.Category }}</p>
                    <p class="card-text">R {{ product.Amount }}</p>
                    <router-link
                      class="btn_prod"
                      :to="{ name: 'product', params: { id: product.ProdID } }"
                      >See more</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row gap-3 justify-content-center" v-else-if="products">
              <div
                v-for="product of products"
                :key="product.ProdID"
                class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4"
              >
                <div style="width: 100%; height: 100%" class="card">
                  <img
                    :src="product.ProdUrl"
                    class="card-img-top"
                    style="padding: 0.6rem"
                    height="390"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ product.ProdName }}</h5>
                    <p class="card-text">{{ product.Category }}</p>
                    <p class="card-text">R {{ product.Amount }}</p>
                    <div id="button">
                      <router-link
                        class="btn_prod"
                        :to="{ name: 'product', params: { id: product.ProdID } }"
                        >See more</router-link
                      >
                      <button
                        style="border: none; padding: 5px; margin: "
                        class="btn_prod"
                        @click="add(product)"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="text-align: center !important; margin-top: 3rem" v-else>
              Loading...
              <Spinner />
            </div>
          </div>
        </div>
      </div>
      <!-- End of products -->
  
      <section id="featured" class="mt-3">
        <div>
          <h2 class="text-black">Why Our Products ?</h2>
          <p class="text-blacks">Let us convince you.</p>
        </div>
      </section>
  
      <div class="con-carousel">
        <div class="flexed-carousel-container">
          <!-- Carousel Container -->
          <div class="carousel-container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide mb-5 mt-5"
              data-bs-ride="carousel"
            >
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide mb-2 mt-2"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://i.postimg.cc/2SJpY8SG/fur7.jpg"
                        class="d-block w-60 mx-auto"
                        style="height: 500px; width: 500px"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://i.postimg.cc/3RzWDH1F/traditional.jpg"
                        class="d-block w-60 mx-auto"
                        style="height: 500px; width: 500px"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://i.postimg.cc/50hjWjNN/fur3.jpg"
                        class="d-block w-60 mx-auto"
                        style="height: 500px; width: 500px"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Text Container -->
          <div class="text-container">
            <!-- Add your text content here -->
            <h2 class="bold-text">
              50+ Ideas <br />
              For more inspiration
            </h2>
            <p class="desc-carousel">
              Our designer already made a lot of <br />
              beautiful prototipe of rooms <br />that inspire you
            </p>
            <button class="btn"><a href="#"></a>Explore More</button>
          </div>
        </div>
      </div>
      <div class="Sponsors">
        <div class="trophy">
          <i class="fa-solid fa-trophy"></i>
          <h2 class="text-sponsor">High quality</h2>
          <p class="sponsors-law">Crafted from top materials</p>
        </div>
  
        <div class="tick">
          <i class="fa fa-check-circle" style="font-size: 20px"></i>
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
  import Spinner from "../components/Spinner.vue";
  export default {
    data() {
      return {
        product: null,
        selectedProduct: null,
        sortOrder: "price-high",
        search: "", 
        category: "All"
      };
    },
    
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    
    computed: {
      products() {
        return this.$store.state.products?.filter((product) => {
          let isMatch = true;
          if (!product.ProdName.toLowerCase().includes(this.search)) {
            isMatch = false;
          }
          if (this.category !== "All" && this.category !== product.Category) {
            isMatch = false;
          }
          return isMatch;
        });
      },
    },
  
    methods: {
      sortProducts() {
        if (this.sortOrder === "price-high") {
          this.filteredProducts = this.products.sort(
            (a, b) => a.Amount - b.Amount
          );
        } else if (this.sortOrder === "price-low") {
          this.filteredProducts = this.products.sort(
            (a, b) => b.Amount - a.Amount
          );
        }
      },
      sortPrice() {
        this.$store.commit("sortPropertiesByPrice");
      },
  
      add(product) {
        if (localStorage.getItem("cart")) {
          const data = JSON.parse(localStorage.getItem("cart"));
  
          const newData = { product };
  
          data.push(newData);
  
          localStorage.setItem("cart", JSON.stringify(data));
        } else {
          const oldData = [{ product }];
          localStorage.setItem("cart", JSON.stringify(oldData));
        }
        // localStorage.setItem('cart', JSON.stringify(product))
        // console.log(localStorage.getItem('cart'));
      },
    },
  
    components: {
      Spinner,
    },
  };
  </script>
  <style scoped>
  #button {
    display: flex;
    justify-content: space-evenly;
  }
  .search-container{
  text-align: center;
  justify-content: center !important;
  }
  
  @media screen and (max-width: 500px) {
   
    .search{
        font-size: 13px;
    }
    #search{
        font-size: 11px;
        padding: 3px;
    }
    .text{
 font-size: 33px;
  }
    .text-sponsor {
      font-size: 12px !important;
    }
    .sponsors-law {
      font-size: 9px !important;
    }
    .shadow__btn {
      padding: 6px !important;
      font-size: 11px !important;
    }
    .card-img-top{
height: 340px;
width: 100%;
}

/* Make the featured section responsive */
.text-black {
font-size: 25px !important;
margin-top: 3rem;
}

.text-blacks {
font-size: 16px !important;
}

/* Make the carousel and text container responsive */
.flexed-carousel-container {
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;
}

/* Make the sponsors section responsive */
.Sponsors {
/* flex-direction: column; */
align-items: center;
justify-content: space-around;
padding: 20px;
}
.d-block{
width: 100% !important;
height: 280px !important;
}
.bold-text{
font-size: 22px !important;
margin: auto ;
text-align: center !important;

}
.desc-carousel{
font-size: 15px !important;
text-align: center !important;

}
.text-container{
margin: auto !important;
}
.btn{
padding: 6px !important;
}
  }
  
  .Sponsors {
    display: flex;
    justify-content: space-between;
  }
  .text-sponsor {
    font-size: 26px;
    color: black;
  }
  .sponsors-law {
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
  
  .Sponsors {
    background: #e9d5b7;
    padding: 20px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  
  .text-black {
    text-align: center;
    font-weight: bold;
    font-size: 38px;
    margin-top: 3rem;
  }
  
  .text-blacks {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 20px;
  }
  
  #featured,
  h2,
  p {
    font-family: "REM", sans-serif;
  }
  
  .bold-text {
    font-weight: 700;
    font-size: 40px;
    color: black;
  }
  
  .desc-carousel {
    font-size: 22px;
  }
  
  .btn {
    padding: 10px;
    background: #b88e2f;
    box-shadow: 0 0 25px #fff3e3;
  }
  
  .mt-5 {
    margin: 0 !important;
  }
  .mb-5 {
    margin: 0;
  }
  
  /* Create a flex container for the carousel and text */
  .flexed-carousel-container {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
  }
  
  /* Style the carousel and text containers */
  .carousel-container,
  .text-container {
    flex: 0 0 calc(30% - 50px); /* Adjust the width as needed */
    margin: 10px; /* Add some spacing between the containers */
  }
  .text-container {
    margin-left: 6rem;
  }
  
  .con-carousel {
    background: #e9d5b7;
    padding: 5px;
  }
  
  .sort-filter-container {
    display: flex;
    /* align-items: center; */
    justify-content: center !important;
    background-color: #f9f1e7;
    padding: 13px;
    /* border-radius: 2px; */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .filter-container,
  .sort-container {
    display: flex;
    align-items: center;
    color: black;
  }
  
  .filter-container select,
  .sort-container select {
    margin-left: 8px;
    padding: 6px;
    border: none;
    border-radius: 4px;
    background-color: white;
    color: black;
  }
  
  label {
    font-weight: bold;
    margin-right: 6px;
  }
  
  /* Style the select arrow */
  select::-ms-expand {
    display: none;
  }
  
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }
  
  /* Hover effect */
  select:hover {
    background-color: whitesmoke;
  }
  
  @import url("https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap");
  body {
    overflow-x: hidden;
  }
  .popular {
    background-color: #f7d069;
  }
  .hero {
    width: 100vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: url(https://i.postimg.cc/y8yHbMPv/shoe-sneaker-mockup-psfiles-758x569.jpg); */
    background-image: url(https://i.postimg.cc/FK5JJZTP/New-Capstone-home-page.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-weight: 600;
    font-size: 50px;
    font-family: "REM", sans-serif;
  }
  .hero {
    width: auto;
  }
  .hero-inner {
    font-size: 65px;
    /* background-color: #E9D5B7; */
    color: black;
  }
  #featured,
  h2,
  p {
    font-family: "REM", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "REM", sans-serif;
    background-color: #eaeaea;
  }
  .container {
    width: 900px;
    margin: 0px auto;
  }
  /* Float three columns side by side */
  .column {
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
  /* Remove extra left and right margins, due to padding */
  .row {
    margin: 0 -5px;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  /* Responsive columns */
  @media screen and (max-width: 700px) {
    .container {
      width: 100%;
    }
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
  /* Style the counter cards */
  /* .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 5px;
      text-align: center;
      background-color: black;
      border-radius:10px;
      cursor:pointer;
    } */
  /* .card .profile{
       border-radius:10px;
       transition: 0.2s;
    } */
  /* .card:hover .profile{
      transform:scale(1.4);
      border-top-right-radius:50px;
      border-top-left-radius:50px;
    } */
  /* .card .content{
      width:100%;
      height:100%;
      position:relative;
      overflow:hidden;
    } */
  /* .card .content .back{
      position:absolute;
      width:100%;
      height:100%;
      background-color: #f1f1f1e6;
      transition:1s;
      z-index:1;
      padding:10px;
    } */
  .from-left {
    top: 0;
    left: -100%;
  }
  .card:hover .content .from-left {
    left: 0%;
  }
  .from-bottom {
    top: 100%;
    left: 0;
  }
  /* .card:hover .content .from-bottom {
       top:0%;
    }
    .from-right{
      top:0%;
      right:-100%;
    }
    .card:hover .content .from-right {
       right:0;
    }
    .card .content .back h3{
      font-size:15px;
      letter-spacing:2px;
    }
    .card .content .back .tem-img{
      border-radius:100%;
    }
    .card .content .back .des{
      font-size:13px;
      padding:20px 0px;
    }
    .card .content .back{
      list-style:none;
      margin:0px;
      padding:0px;
    }
    .card .content .back  li{
      display:inline-block;
    }
    .card .content .back  li a{
      display:block;
      background:#333;
      color:#fff;
      width:40px;
      height:40px;
      text-align:center;
      line-height:40px;
      border-radius:100%;
    } */
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
  button:hover {
    /* background: rgb(200,160,4); */
    color: #2c3e50;
  }
  
  .box {
    width: 290px;
    margin: 100px auto;
    background: #fff;
    border-radius: 7px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
  }
  .box .heading {
    /* background: rgb(200,160,4); */
    background: black;
    border-radius: 7px 7px 0px 0px;
    padding: 10px;
    color: #fff;
    text-align: center;
    font-family: "Rubik";
  }
  .faqs {
    padding: 0px 20px 20px;
  }
  ::-webkit-details-marker {
    float: right;
    margin-top: 3px;
  }
  details {
    background: #f6f6f6;
    padding: 10px 20px;
    border-radius: 7px;
    margin-top: 20px;
    font-family: "Rubik";
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
  }
  details summary {
    outline: none;
  }
  
  /* Products */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .card .card-img-top {
    border-radius: 4px;
    transition: 0.9s;
  }
  
  .card:hover .card-img-top {
    transform: scale(1.2);
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    margin-bottom: 1rem;
  }
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .btn_prod {
    color: black !important;
    text-decoration: none;
    background: #918989af;
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
  }
  .btn_prod:hover {
    background: #918989af;
    box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9 !important;
  }
  /* End of products */
  </style>