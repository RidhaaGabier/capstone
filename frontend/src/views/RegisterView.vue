<template>
    <div>
        <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                    <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Welcome</p>
                 <a href="#" class="btn shadow__btn mb-2"> Register <i class="fa-regular fa-greater-than"> Sign Up ? </i></a>
                </div>
              </section>
        <div style="background-color:#F9F1E7; padding: 1.1rem; color: black; text-align: center; margin-bottom: 3rem;">
              <h3>Become Part Of Our Furniture</h3>
            </div>
    <div class="registration-form">
      
      <form @submit.prevent="registerUser">
        <h2 style="font-size: 28px;" class="text-black">Sign Up ?</h2>
        <p class="text-black mb-5">Create An Account With Us !</p>
        
        <div class="form-group">
          <label for="name">Name :</label>
          <input type="text" id="FirstName" placeholder="Enter your name" v-model="payload.FirstName" required />
        </div>

        <div class="form-group">
          <label for="LastName">Surname :</label>
          <input type="text" id="LastName" placeholder="Enter your surname" v-model="payload.LastName" required />
        </div>

        <div  class="form-group" >
          <label for="LastName">Email :</label>
          <input type="text" id="UserEmail" placeholder="Enter your email" v-model="payload.UserEmail" required />
        </div>

        <div class="form-group">
          <label for="address">Address :</label>
          <input type="text" id="Address" placeholder="Enter your address" v-model="payload.Address" required />
        </div>
        
        <div class="form-group">
          <label for="address">User Image :</label>
          <input type="text" id="Address" placeholder="Enter your address" v-model="payload.UserProfile" required />
        </div>

        <div class="form-group">
          <label for="UserPass">Password :</label>
          <input type="password" id="UserPass" placeholder="Make a password" v-model="payload.UserPass" required />
        </div>

        <!-- <div class="form-group">
          <label for="profile-picture">Profile Picture</label>
          <profile-picture-upload v-model="payload.profilePicture" />
        </div> -->
        <!-- <div class="form-group">
          <label for="UserRole">User Role :</label>
          <select id="UserRole" v-model="payload.UserRole" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> -->

        <button type="submit">Register</button>

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
  export default {
    data() {
      return {
        payload: {
          FirstName: "",
          LastName: "",
          UserEmail: "",
          Address: "",
          UserPass: "",
          UserProfile: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png", // Should store the URL or file reference
          UserRole: "user",
        },
      };
    },
    methods: {
    registerUser() {
      // e.preventDefault();

      // payload = {
      //   FirstName: this.FirstName,
      //   LastName: this.LastName,
      //   UserEmail: this.UserEmail,
      //   Address: this.Address,
      //   UserPass: this.UserPass,
      //   UserUrl: this.UserUrl,
      //   UserRole: this.UserRole,
      // };
      this.$store.dispatch("registerUser", this.payload);
    },
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

.registration-form {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 20px;
  border-radius: 5px;
 
  background-color: #fff;
}

.registration-form h2 {
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
.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #9F9F9F;
  border-radius: 5px;
  outline: none;
}

.form-group select {
  cursor: pointer;
}


.form-group img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  padding: 10px;
    background: #B88E2F;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color:#B88E2F ;
  box-shadow: 2px 2px 5px #ccc5b9, -2px -2px 5px#CCC5B9 !important;
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
</style>
  