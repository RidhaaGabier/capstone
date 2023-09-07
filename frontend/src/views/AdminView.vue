<template lang="">
  <div>
    <h1 class="text-black">Product List</h1>
    <div class="text-center">
      <AddProduct />
      
    </div>

    <table v-if="products">
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
              style="width: 5rem"
            />
          </td>
          <td>
           
            
              <UpdateProducts :product="product"/>
          
          </td>
          <td>
            <button
              @click="deleteProduct(product.ProdID)"
              class="btn btn-dark"
              data-bs-toggle=""
              data-bs-target="#exampleModal"
              data-bs-whatever=""
            >
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
    </table>
    <div style="text-align: center !important; margin-top: 3rem" v-else>
      Loading...
      <Spinner />
    </div>


    <div v-if="users">
      <h1 class="text-black">User Table:</h1>
    <div class="table-responsive" v-if="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">UserRole</th>
            <th scope="col">Email Address</th>
            <th scope="col">UserProfile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.UserID">
          <tr>
            <th scope="row">{{ user.UserID }}</th>
            <td>{{ user.FirstName }}</td>
            <td>{{ user.LastName }}</td>
            <td>{{ user.Address }}</td>
            <td>{{ user.UserPass }}</td>
            <td>{{ user.UserRole }}</td>
            <td>{{ user.UserEmail }}</td>
            <td>{{ user.UserProfile }}</td>

            <td>
              <img
                :src="user.UserProfile"
                :alt="user.FirstName"
                style="width: 5rem"
              />
            </td>
            <td>
              <button
                class="edit-btn"
                @click="updateUsers()"
                data-bs-toggle=""
                data-bs-target="#exampleModal"
                data-bs-whatever=""
              >
                Edit
                
              </button>
            </td>
            <td>
              <button
                type="button"
                @click="deleteUser(user.UserID)"
                class="delete-btn"
                data-bs-toggle=""
                data-bs-target="#exampleModal"
                data-bs-whatever=""
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div style="text-align: center !important; margin-top: 3rem" v-else>
      Loading...
      <Spinner />
    </div>
  </div>
  <!-- <AddProducts/>
      <UpdateUser/>
      <AddUser/>
      <EditProfile/> -->
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
    product() {
      return this.$store.state.product;
    },
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
  background-color: #dc3545;
}
.text-black {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
}
</style>
