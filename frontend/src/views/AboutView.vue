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
            

           <!-- image and description -->
            <div class="centered">
    <img class="about-img" src="https://i.postimg.cc/QtKQn1Th/Rectangle-68.png" alt="Your Image Description">
    <div class="icon-container">
        <p class="icon"><i class="fas fa-solid fa-eye"></i> ¹⁰⁰⁰</p>
        <p class="icon"><i class="fas fa-solid fa-calendar-days"></i>  ¹⁴/ᴼᶜᵗ/²⁰²³</p>
        <p class="icon"><i class="fas fa-solid fa-tag"></i> ᵂᵒᵒᵈ</p>
    </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h2 class="pic-info">Going all-in with millennial design</h2>
                <p class="about-prod" >
Going all-in with millennial design means infusing your space with a vibrant blend of pastel colors and retro-inspired elements. Embrace open-concept layouts and multifunctional furniture to maximize both style and functionality. Don't forget to incorporate plenty of indoor plants and unique statement pieces for everyone.</p>
            </div>


            <div class="centered">
    <img class="about-img" src="https://i.postimg.cc/gjRKr8zN/Rectangle-68-2.png" alt="Your Image Description">
    <div class="icon-container">
        <p class="icon"><i class="fas fa-solid fa-eye"></i> ¹²⁵⁰⁰</p>
        <p class="icon"><i class="fas fa-solid fa-calendar-days"></i>  ²³/ᴺᵒᵛ/²⁰²³</p>
        <p class="icon"><i class="fas fa-solid fa-tag"></i> ᴹᵒᵈᵉʳⁿ</p>
    </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h2 class="pic-info">Exploring new ways of decorating</h2>
                <p class="about-prod" >Exploring new ways of decorating involves embracing minimalist design principles, where less is more. Experiment with sustainable and repurposed materials to create eco-friendly decor that adds character to your space. Incorporate smart technology to seamlessly blend functionality with aesthetics, creating a modern and efficient living environment. We will always go the extra mile.</p>
            </div>


            <div class="centered">
    <img class="about-img" src="https://i.postimg.cc/NF11QtDn/Rectangle-68-3.png" alt="Your Image Description">
    <div class="icon-container">
        <p class="icon"><i class="fas fa-solid fa-eye"></i> 16750</p>
        <p class="icon"><i class="fas fa-solid fa-calendar-days"></i>  ¹⁹/ᴰᵉᶜ/²⁰²³</p>
        <p class="icon"><i class="fas fa-solid fa-tag"></i> ᴰᵉˢᶦᵍⁿ</p>
    </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <h2 class="pic-info">Handmade piece's that took time  </h2>
                <p class="about-prod">These creations often serve as cherished heirlooms, reminding us of the value of craftsmanship in our fast-paced, mass-produced world.Your Decor goes world wide. With high demands and hard work, consistency adapting are who we are. Showing original unseen designs we present to you Decor , all your need at one stop furniture store. We put our all in , that is why we the best over-all !</p>
            </div>
       
<!-- End of image and description -->
           

         

            

         

            <div class="Sponsors">

            <div class="trophy">
              <i class="fa-solid fa-trophy"></i>
              <h2 class="text-sponsor">High quality</h2>
              <p class="sponsors-law">Crafted from top materials</p>
            </div>

            <div class="tick">
              <i class="fa fa-check-circle" style="font-size:20px"></i>
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

@media screen and (max-width: 500px){
  .about-img{
    width: 100% !important;
    height: 260px !important;
  }
  .text-sponsor{
    font-size: 12px !important;
  }
  .sponsors-law{
    font-size: 9px !important;
  }
  .about-prod{
    font-size: 12px;
  }
  .pic-info{
    font-size: 19px;
  }
  .text{
    font-size: 40px;
  }
}


.about-prod {
  text-align: justify;
  max-width: 490px; /* Adjust the maximum width as needed */
  margin: auto; /* Center the text horizontally */
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


/* about styles */
.Sponsors {
  display: flex;
  justify-content: space-between;
}
.text-sponsor{
  font-size: 26px;
  color: black;
}
.sponsors-law{
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

  .Sponsors{
    background: #E9D5B7;
    padding:20px;
    margin-top: 5rem;
    margin-bottom: 5rem;
   
  }
  

.text-black{
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  margin-top: 3rem;
  
}

.text-blacks{
  text-align: center;
  margin-bottom: 3rem;
  font-size: 20px;
}

#featured, h2, p{
    font-family: 'REM', sans-serif;
}

.bold-text{
  font-weight: 700;
  font-size: 40px;
  color: black;
}

.about-img{
  border-radius: 4px;
}




.centered {
    text-align: center;
    margin-top: 5rem;
}

.about-img {
    width: 500px;
    height: 360px;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.icon {
    font-size: 16px;
    margin: 0 20px;
    
}
/* end about styles */
</style>


