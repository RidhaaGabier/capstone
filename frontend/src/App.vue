<template>
   <div>
    <nav>
      <NavBar/>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>


<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    NavBar,
    Footer
  }
  
}
</script>