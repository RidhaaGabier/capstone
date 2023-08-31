<template lang="">
    <div>
             <!-- Navbar -->
    <nav class="navbar sticky-top navbar-expand-lg ">
    <div class="container-fluid">
      <router-link to="/"
        ><img class="navbar-logo"
          src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png"
          id="fade-in"
          alt="Decor" 
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li id="fade-in"><router-link to="/">Home</router-link></li>
    
          <li class="move" id="fade-in">
            <router-link to="/products">Product</router-link>
          </li>
          <li class="move" id="fade-in">
            <router-link to="/about">About</router-link>
          </li>
          <li class="move" id="fade-in">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li id="fade-in">
            <router-link to="/admin"><i class="fa-regular fa-user"></i></router-link>
          </li>
          <li id="fade-in">
            <router-link to="/admin"><i class="fa-solid fa-magnifying-glass"></i></router-link>
          </li>
          <li id="fade-in">
            <router-link to="/admin"><i class="fa-solid fa-cart-shopping"></i></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>




    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
*{
  font-family: 'REM', sans-serif;
}


@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
   
  }
  
  #fade-in {
    animation: fadeIn 2s;
  }
  



.nav-logo {
    width: 3rem;
  }
  
  nav {
    background: #FFFFFF;
    box-shadow: 0 5px 6px rgba(255, 255, 255, 0.958);
    padding: 25px !important;
  }
  #navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #navbar li {
    padding: 0 25px;
    position: relative;
  }
  /* styling for active links for the future */
  #navbar li a {
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: black ;
    transition: 0.5s ease;
  }
  /* styling for active links for the future */
  #navbar li a:hover,#navbar li a.active {
    color: rgb(0, 0, 0) !important;
  }

  /* styling for active links for the future */
  #navbar li a.router-link-exact-active::after,
  #navbar li a:hover::after {
    content: "";
    width: 56%;
    height: 1px;
    background: rgba(0, 0, 0, 0.43) !important;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }

  .navbar-logo{
  height: 30px;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}


ul li a{
  text-decoration: none;
}

ul li a.router-link-exact-active{
  text-decoration: none;
}
</style>
