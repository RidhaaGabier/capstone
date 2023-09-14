import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter() {
    //   if(!cookies.get('LegitUser')) {
    //     router.push({name: 'login'})
    //   }
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products', // Add this route for the /product path
    name: 'products',
    component: () => import('../views/ProductsView.vue') // Replace with your actual component path
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: () => import('../views/UserProfileView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
   
  },
  {
    path: '/cart',
    name: 'cart',
   
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/search',
    name: 'search',
   
    component: () => import('../views/SearchView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from) => {
//   console.log(store.state)
//   if (
//     // make sure the user is authenticated
//     !store.state.user &&
//     // ❗️ Avoid an infinite redirect
//     to.name === 'home'
//   ) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }
//   else if(
//     // make sure the user is authenticated
//     store.state.user &&
//     // ❗️ Avoid an infinite redirect
//     to.name === 'login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'home' }
//   }
// })

export default router
