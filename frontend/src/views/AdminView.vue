<template lang="">
  <div>
    <h1 class="text-black">Product List</h1>
    <div class="text-center">
      <h3 class="mt-5">Add New Products</h3>
      <AddProduct />
      

      
    </div>

    <div class="table-container">
    <table v-if="products"  class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Image</th>
          <th scope="col">Edit</th>
          <th scope="co;">Delete</th>
        </tr>
      </thead>
      <tbody v-for="product in products" :key="product.ProdID">
        <tr>
          <th scope="row">{{ product.ProdID }}</th>
          <td>{{ product.ProdName }}</td>
          <td>{{ product.Quantity }}</td>
          <td>{{ product.Amount }}</td>
          <td>{{ product.Category }}</td>
          <td>
            <img
              :src="product.ProdUrl"
              :alt="product.ProdName"
              style="width: 4rem; height:4rem" 
            />
          </td>
          <td>
            <button
        type="button"
        class="btn-update"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal'+product.ProdID"
        data-bs-whatever="@mdo"
      >
        Update
      </button>
            
          </td>
          <td>
            <button @click="deleteProduct(product.ProdID)" class="btn btn-dark">
              Delete
            </button>
          </td>
          <td>
            <!-- <button @click="addProduct(product.ProdID)" class="btn btn-dark" data-bs-toggle=""
                data-bs-target="#exampleModal" data-bs-whatever="">
                Add
              </button> -->
          </td>
        </tr>
      </tbody>
      <div v-for="product in products">
        <UpdateProducts :product="product" />
      </div>
    </table>
  
    <div style="text-align: center !important; margin-top: 3rem" v-else>
      Loading...
      <Spinner />
    </div>
  </div>

    <h1 class="text-black">Users List</h1>
    <div class="text-center">
      <h3 class="mt-5">Add New User</h3>
      <AddUser />
      
    </div>

   
<div class="table-container">
    <table v-if="users">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <!-- <th scope="col">Password</th> -->
          <th scope="col">Address</th>
          <th scope="col">Profile</th>
          <th scope="col">Edit</th>
          <th scope="co;">Delete</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.UserID">
        <tr>
          <th scope="row">{{ user.UserID }}</th>
          <td>{{ user.FirstName }}</td>
          <td>{{ user.LastName }}</td>
          <td>{{ user.UserRole }}</td>
          <td>{{ user.UserEmail }}</td>
          <!-- <td>{{ user.UserPass }}</td> -->
          <td>{{ user.Address }}</td>
          <td>
            <img
              :src="user.UserProfile"
              :alt="user.FirstName"
              style="width: 4rem; height:4rem" 
            />
          </td>
          <td>
            <button
        type="button"
        class="btn-update"
        data-bs-toggle="modal"
        :data-bs-target="'#userModal'+user.UserID"
        data-bs-whatever="@mdo"
      >
        Update
      </button>
            
          </td>
          <td>
            <button @click="deleteUser(user.UserID)" class="btn btn-dark">
              Delete
            </button>
          </td>
          <td>
          </td>
        </tr>
      </tbody>
      <div v-for="user in users">
        <UpdateUser :user="user" />
 
      </div>
    </table>
  
    <div style="text-align: center !important; margin-top: 3rem" v-else>
      Loading...
      <Spinner />
    </div>
  </div>
  </div>

</template>

<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";
import UpdateUser from "@/components/UpdateUser.vue";
import AddUser from "@/components/AddUser.vue";
import EditProfile from "@/components/EditProfile.vue";
import AddProduct from "../components/AddProduct.vue";
import UpdateProducts from "@/components/UpdateProducts.vue"

export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    // product() {
    //   return this.$store.state.product;
    // },
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },

  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    // updateProducts(id) {
    //   this.$store.dispatch("updateProducts", id);
    // },
  },

  components: {
    Spinner,
    UpdateUser,
    AddUser,
    AddProduct,
    EditProfile,
    UpdateProducts,
  },
};
</script>

<style scoped>
/* Add your CSS styling here */
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  text-align: left;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
img {
  max-width: 100px;
  max-height: 100px;
}
.edit-btn,
.delete-btn {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
.delete-btn {
  background-color: #dc3545 !important
}
.text-black {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
}
.btn{
  background:#dc3545 ;
}
.btn-update{
  background: #4F7942;
  border-radius: 5px;
  padding: 5px;
  color: white;
}

@media (max-width: 500px) {
  table {
    font-size: 12px; /* Adjust the font size for smaller screens */
  }

  /* You can add more specific styling for smaller screens here */
  .btn-update,
  .btn-dark {
    font-size: 10px; /* Adjust the font size for buttons on smaller screens */
    padding: 2px 5px;
  }
}
.table-container {
  overflow-x: auto; /* Add horizontal scrolling for small screens */
}


.img-responsive {
  max-width: 100px;
  max-height: 100px;
}

.text-black {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
}

.btn {
  background: #dc3545;
}



/* Content styles */
.content {
  flex: 1;
  padding: 20px;
}

/* Example button style */


.btn:hover {
  background-color:rgb(100, 4, 4);
}
</style>
