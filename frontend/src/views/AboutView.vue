<template>
  <div class="container-fluid p-0">
    <!--hero-->
            <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
              <div class="hero-inner text-center">
                <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                <p class="text">About</p>
               <a href="#" class="btn shadow__btn mb-2">About<i class="fa-regular fa-greater-than">Decor</i></a>
              </div>
            </section>

            <div style="background-color:#F9F1E7; padding: 1.1rem; color: black; text-align: center;">
              <h3>What We Stand For</h3>
            </div>
  <!----featured info-->
              <section id="featured" class="mt-3">
              <div>
                <h2 class="text-black">Popular Categories</h2>
                <p class="text-black">We have a Featured Collection available for Men and Women.</p>
              </div>
            </section>
    <!--categories--->
    <div class="container mb-4">
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/dVfZFzTs/adicane-clog-men.jpg">
                  <h2 class="mt-4 text-white">Sandals</h2>
                </div>
                <div class="back from-left">
                  <p class="des fw-semibold p-2">
                  Shop quality summer shoes for both men and women.
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
          </div>
        </div>
          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/MZYcHcjr/manola-court-heel.jpg">
                  <h2 class="mt-4 text-white">Formal</h2>
                </div>
                <div class="back from-bottom">
                  <p class="des fw-semibold p-2">
                    Shop quality formal shoes to complete your look!
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div class="column">
          <div class="card">
            <div class="content">
              <div class="front">
                <img class="profile" width="100%" src="https://i.postimg.cc/zBrBX5Dr/zig-dynamica-men.jpg" >
                <h2 class="mt-4 text-white">Sneakers</h2>
              </div>
              <div class="back from-right">
                <p class="des fw-semibold p-2">
                Shop the best quality and step up your shoe drip!
                </p>
                <button class="shadow__btn">
                  <a href="/products">Shop Now!</a>
                  </button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
               <!--FAQs-->
               <section id="featured" class="mt-3">
              <div>
                <h2 class="text-black">Frequently Asked Questions</h2>
                <p class="text-black">Know more about our conditions.</p>
              </div>
            </section>
          <!-- <div class="box">
                <p class="heading">FAQs</p>
                <div class="faqs">
                    <details>
                      <summary class="fw-bold text-black">Discount</summary>
                      <p class="text mt-2 fw-semibold text-black info"> If you buy more than 2 items over R600 , you get a 10% discount on the total price.</p>
                    </details>
                    <details>
                      <summary class="fw-bold text-black">Online Payments</summary>
                      <p class="text mt-2 fw-semibold text-black info">We offer various payment methods for prepaid to paying via monthly installlments.</p>
                    </details>
                    <details>
                      <summary class="fw-bold text-black">Delivery</summary>
                      <p class="text mt-2 fw-semibold text-black info"> We deliver in 3-5 business days and offer free delivery for purchases over R500.</p>
                    </details>
                </div>
          </div> -->
  </div>
</template>
<script>
// @ is an alias to /src
export default {
}
</script>
<style scoped>
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
background-image: url(https://i.postimg.cc/TwpPdJnf/new-scrren.png);
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
