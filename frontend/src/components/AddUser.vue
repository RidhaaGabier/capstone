<template>
    <div>
      <div class="container flex-container">

        <label> UserID</label>
        <input type="number" autocomplete="off" required name="UserID" v-model="model.users.UserID" />

        <label> First Name</label>
        <input type="text" autocomplete="off" required name="FirstName" v-model="model.users.FirstName" />
        
        <label>Last Name</label>
        <input type="text" autocomplete="off" required name="LastName" v-model="model.users.LastName" />
        
        <label>Address</label>
        <input type="text" autocomplete="off" required name="Address" v-model="model.users.Address" />
  
        <label>Password</label>
        <input type="text" autocomplete="off" required name="UserPass" v-model="model.users.UserPass" />
       
        <label>Role</label>
        <input type="text" autocomplete="off" required name="UserRole" v-model="model.users.UserRole" />
        
        <label>Email</label>
        <input type="text" autocomplete="off" required name="UserEmail" v-model="model.users.UserEmail" />
        
        <label>User Profile</label>
        <input type="text" autocomplete="off" required name="UserProfile" v-model="model.users.UserProfile" />
        
  
        <button @click="addUser" class="btn-submit">Submit</button>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        model: {
          users: {
            FirstName: "",
            LastName: "",
            Address: "",
            UserPass: "",
            UserRole: "",
            UserEmail: "",
            UserProfile: "",
            UserID: "",
          }
        }
  
      };
    },
    methods: {
      addUser() {
        axios.post("https://capstone-8rni.onrender.com/user", this.model.users)
          .then(response => {
            console.log("User added:", response.data);
  
            // Emit an event to notify parent component to close the modal
            this.$emit('ToggleModal');
          })
          .catch(error => {
            console.error("Error adding user:", error);
            alert("An error occurred while adding the user.");
            
          });
      },
    }
    };
  </script>
  
  <style scoped;></style>
  