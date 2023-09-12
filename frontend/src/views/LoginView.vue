<template>
    <div>
        <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                    <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Welcome Back</p>
                 <a href="#" class="btn shadow__btn mb-2"> Log In <i class="fa-regular fa-greater-than"> Decor </i></a>
                </div>
              </section>
        <div style="background-color:#F9F1E7; padding: 1.1rem; color: black; text-align: center; margin-bottom: 3rem;">
              <h3>Become Part Of Our Furniture</h3>
            </div>

    <div class="login-form">
      <form @submit.prevent="login">
        <h2 style="font-size: 28px;" class="text-black">Login :</h2>
        <p class="text-black mb-5" >Enter Details</p>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="UserEmail" placeholder="UserEmail" v-model="payload.UserEmail" required />
        </div>
        <div class="form-group">
          <label for="password">Password :</label>
          <input type="password" id="UserPass" placeholder="UserPass" v-model="payload.UserPass" required />
        </div>
        <div class="register">
             <router-link to="/register">
              Don't have an account?
              Register Here
          </router-link>
          </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
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
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()

  export default {
    data() {
      return {
        payload: {
          UserEmail: "",
          UserPass: "",
        },
      };
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      login() {
      this.$store.dispatch("loginUser", this.payload);
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetchUsers')
  },
  mounted() {
    console.log(cookies.get('LegitUser'));
  },
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
  body{
    overflow-x: hidden;
  }
  @media screen and (max-width: 500px){
 
 .text-sponsor{
   font-size: 12px !important;
 }
 .sponsors-law{
   font-size: 9px !important;
 }
 .text{
  font-size: 35px;
 }
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

  *{
    font-family: 'REM', sans-serif;
  }

  .text-black{
  text-align: center;
  font-weight: bold;
  font-size: 19px;
 
  
}

.text-blacks{
  text-align: center;
  margin-bottom: 3rem;
}

  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
  }
  
  .login-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #9F9F9F;
    border-radius: 5px;
    outline: none;
  }
  
  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background-color:#B88E2F ;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color:#B88E2F ;
    box-shadow: 2px 2px 5px #ccc5b9, -2px -2px 5px#CCC5B9 !important;
  }
  a{
  text-decoration: none;
  color:gray;
}
.register{
  padding-bottom: 10px;
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
    margin-bottom: 2rem;
   
  }
  </style>