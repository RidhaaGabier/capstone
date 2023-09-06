<template>
    <div>
      <div class="container flex-container" v-if="user">

        <label for="UserID">UserID</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="UserID"
          name="UserID"
          v-model="user.UserID"
          :placeholder="user.UserID"
        />


        <label for="FirstName">Name</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="FirstName"
          name="FirstName"
          v-model="user.FirstName"
          :placeholder="user.FirstName"
        />
        <label for="LastName">Surname</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="LastName"
          name="LastName"
          v-model="user.LastName"
          :placeholder="user.LastName"
        />
  
        <label for="Address">Address</label>
        <input
          type="number"
          autocomplete="off"
          required
          id="Address"
          name="userAge"
          v-model="user.Address"
          :placeholder="user.Address"
        />
  
        <label for="UserRole">UserRole</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="UserRole"
          name="Gender"
          v-model="user.UserRole"
          :placeholder="user.UserRole"
        />
  
        <label for="userRole">UserEmail</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="UserEmail"
          name="UserEmail"
          v-model="user.UserEmail"
          :placeholder="user.UserEmail"
        />
        <label for="UserPass">UserPass</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="UserPass"
          name="UserPass"
          v-model="user.UserPass"
          :placeholder="user.UserPass"
        />
  
        <label for="UserProfile">UserProfile</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="UserProfile"
          name="UserProfile"
          v-model="user.UserProfile"
          :placeholder="user.UserProfile"
        />
  
        <button @click="updateUser" class="btn-submit">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        FirstName: "",
        LastName: "",
        Address: "",
        UserRole: "",
        UserPass: "",
        UserEmail: "",
        UserProfile: "",
        UserID: "",
      };
    },
    methods: {
      async updateUser() {
        try {
          await axios.put(
            `https://capstone-8rni.onrender.com/user/${this.$route.params.id}`,
            {
              firstName: this.user.FirstName,
              lastName: this.user.LastName,
              Address: this.user.Address,
              UserRole: this.user.UserRole,
              UserPass: this.user.UserPass,
              UserEmail: this.user.UserEmail,
              UserProfile: this.user.UserProfile,
              UserID: this.user.UserID,
            }
          );
          this.FirstName = "";
          this.LastName = "";
          this.Address = "";
          this.UserRole = "";
          this.UserPass = "";
          this.UserEmail = "";
          this.UserProfile = "";
          this.UserID = "";
  
          this.$router.push("/admin");
        } catch (err) {
          console.log(err);
        }
      },
    },
    props: ["id"],
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    mounted() {
      this.$store.dispatch("getUser", this.id), this.$store.dispatch("getUsers");
    },
  };
  </script>
  
  <style scoped>

  </style>
  