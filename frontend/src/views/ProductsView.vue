<template>
    <div class="container-fluid p-0">
      <!--hero-->
              <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                  <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Shop</p>
                 <a href="#" class="btn shadow__btn mb-2">Item<i class="fa-regular fa-greater-than">Shop</i></a>
                </div>
              </section>
              

              <div class="sort-filter-container">
              <div class="filter-container">
              <label for="filter">Filter by:</label>
              <select id="filter">
              <option value="all">All Items</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              </select>
              <labe style="margin-left:20px;">&#11820; | Showing 1-0 of 10 results</labe>
              </div>
              <div class="sort-container">
                <label>Show </label> <label style="background-color: white; color: rgb(58, 58, 58); padding: 7px;"> 16</label>
              <label for="sort">Sort by:</label>
              <select id="sort">
              <option value="relevance">Relevance</option>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="price-low">Price Low to High</option>
              <option value="price-high">Price High to Low</option>
              </select>
              </div>
              </div> 

          <Products/>
             
    </div>
  </template>
  <script>
  import Products from '@/components/Products.vue';

  export default {
    components:{
      Products,
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
  }
}
  </script>
  <style scoped>


.sort-filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F9F1E7;
  padding: 10px;
  /* border-radius: 2px; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
  text-overflow: '';
}

/* Hover effect */
select:hover {
  background-color:whitesmoke;
}






  @import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
  body{
    overflow-x: hidden;
  }
  .popular{
    background-color:  #F7D069;
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
  /* Float three columns side by side */
  .column {
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
  /* Remove extra left and right margins, due to padding */
  .row {margin: 0 -5px;}
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  /* Responsive columns */
  @media screen and (max-width: 700px) {
   .container{
    width: 100%;
  }
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
  /* Style the counter cards */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
    text-align: center;
    background-color: black;
    border-radius:10px;
    cursor:pointer;
  }
  .card .profile{
     border-radius:10px;
     transition: 0.2s;
  }
  .card:hover .profile{
    transform:scale(1.4);
    border-top-right-radius:50px;
    border-top-left-radius:50px;
  }
  .card .content{
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
  }
  .card .content .back{
    position:absolute;
    width:100%;
    height:100%;
    background-color: #f1f1f1e6;
    transition:1s;
    z-index:1;
    padding:10px;
  }
  .from-left{
    top:0;
    left:-100%;
  }
  .card:hover .content .from-left {
     left:0%;
  }
  .from-bottom{
    top:100%;
    left:0;
  }
  .card:hover .content .from-bottom {
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
  button:hover{
    /* background: rgb(200,160,4); */
    color:#2c3e50
  }
  .shadow__btn {
    /* background: rgb(200,160,4); */
    /* box-shadow: 0 0 25px rgb(200,160,4); */
  }
  .shadow__btn:hover {
    /* box-shadow: 0 0 5px rgb(0,140,255),
                0 0 25px rgb(200, 160, 4),
                0 0 50px rgb(200, 160, 4),
                0 0 100px rgb(200,160,4); */
  }
  .box{
     width: 290px;
     margin: 100px auto;
     background: #fff;
     border-radius: 7px;
     box-shadow: 1px 2px 4px rgba(0,0,0,.3);
     margin-top: 20px;
  }
  .box .heading{
    /* background: rgb(200,160,4); */
    background: black;
     border-radius: 7px 7px 0px 0px;
     padding: 10px;
     color: #fff;
     text-align: center;
     font-family: "Rubik";
  }
  .faqs{
     padding: 0px 20px 20px;
  }
  ::-webkit-details-marker{
     float: right;
     margin-top: 3px;
  }
  details{
     background: #F6F6F6;
     padding: 10px 20px;
     border-radius: 7px;
     margin-top: 20px;
     font-family: "Rubik";
     font-size: 14px;
     letter-spacing: 1px;
     cursor: pointer;
  }
  details summary{
     outline: none;
  }
  </style>
  