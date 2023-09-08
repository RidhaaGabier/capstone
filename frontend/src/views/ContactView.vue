<template>
    <div class="container-fluid p-0">
      <!--hero-->
              <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
                <div class="hero-inner text-center">
                    <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                  <p class="text">Contact</p>
                 <a href="#" class="btn shadow__btn mb-2">Home<i class="fa-regular fa-greater-than">Contact</i></a>
                </div>
              </section>
  

                <!----featured info-->
                <section id="featured" class="mt-3 text-center">
                  <div class="container">
                  <h2 class="text-black">Get In Touch With Decor</h2>
                  <p class="text-black text-justify">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                  </div>
                </section>
                <!--categories--->
              
                <!-- contact -->
                <div class="contact-container">
                <div class="contact-details">
                <h2>Contact Details</h2>
                <p><i class="fa-solid fa-business-time"></i> <strong>Business Name:</strong> Decor</p>
                <p><i class="fa-solid fa-location-dot"></i> <strong>Address:</strong> 122 Main Street, Cape Town, South Africa</p>
                <p><i class="fa-solid fa-phone"></i> <strong>Phone:</strong> (021) 954-7890</p>
                <p><i class="fa-regular fa-envelope"></i> <strong>Email:</strong> Decor@gmail.com</p>
                <p><i class="fa-solid fa-clock"></i> <strong>Working Time:</strong> Monday-Friday 9:00-22:00 <br><span style="margin-left: 1.3rem;">Saturday-Sunday 9:00-21:00</span></p>
                </div>

                <div class="contact-form">
                <form action="https://formspree.io/f/xknayqyj" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Kindly enter your name" required >

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Kindly enter your email" required>

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Kindly enter your design" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" placeholder="We appreciate your feedback" required></textarea>

                <button type="submit">Submit</button>
                </form>
                </div>
                </div>
                <!-- contact -->





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
    methods:{
      validateForm() {
      let isValid = true;

      if (!this.name) {
        this.errors.name = 'Name is required';
        isValid = false;
      } else {
        this.errors.name = ' You have not entered your name';
      }

      if (!this.email) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = 'Invalid email format';
        isValid = false;
      } else {
        this.errors.email = 'You are missing your email';
      }

      if (!this.message) {
        this.errors.message = 'Message is required';
        isValid = false;
      } else {
        this.errors.message = 'We need feedback';
      }

      return isValid;
    },
    isValidEmail(email) {
      // Implement your email validation logic
    }
  }
};
    
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
  background-image: url(https://i.postimg.cc/Kv6FByBX/new-walll-light.png);
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

  /* Contact css */
  #featured, h2, p{
    font-family: 'REM', sans-serif;
}

.text-black{
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
  
}

.text-blacks{
  text-align: center;
  margin-bottom: 3rem;
}
.contact-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 50px;
        }

        .contact-form {
            /* background-color: #ffffff; */
            padding: 30px;
            border-radius: 8px;
            /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
            width: 40%;
        }

        .contact-details {
            /* background-color: #ffffff; */
            padding: 30px;
            border-radius: 8px;
            /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
            width: 40%;
            margin-left: 20px;
        }

        .contact-form h2,
        .contact-details h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .contact-form label,
        .contact-details p {
            font-size: 16px;
            margin-bottom: 10px;
            color: #333;
        }

        .contact-form input[type="text"],
        .contact-form input[type="email"],
        .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .contact-form button {
          background: #B88E2F;
            color: #fff;
            padding: 10px 70px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .contact-form button:hover {
            background-color:#B88E2F ;
            box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;

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
    margin-bottom: 5rem;
   
  }

  @media screen and (width>1000px){}
  


  /* end of contact css */
  </style>
  