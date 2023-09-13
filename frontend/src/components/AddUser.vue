<template>
  <div>
    <div class="container flex-container">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModaluser" data-bs-whatever="@mdo">Add</button>


<div class="modal fade" id="exampleModaluser" tabindex="-1" aria-labelledby="exampleModalLabeluser" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabeluser">New message</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">

      <form>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Name</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="FirstName" v-model="user.FirstName">
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Surname</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="LastName" v-model="user.LastName" >
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Role</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="UserRole" v-model="user.UserRole"  >
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Email</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="UserEmail" v-model="user.UserEmail" >
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Password</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="UserPass" v-model="user.UserPass" >
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Address</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="Address" v-model="user.Address" >
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Profile</label>
          <input type="text" class="form-control" id="recipient-na" autocomplete="off" required name="UserProfile" v-model="user.UserProfile" >
        </div>
      </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button @click="addUser" type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
    </div>
  </div>
</div>
</div>


     



    
    </div>
  </div>
</template>
<script>

export default {
  name: 'AddUserComp',
  props: ['ToggleModal'],
  data() {
    return {
     
        user: {
        // Make sure to include a prop for prodID or remove it if not needed
          FirstName: '',
          LastName: '',
          UserRole: '',
          UserEmail: '', // 'category' should be 'Category' to match the v-model
          UserPass: '',
          Address: '',
          UserProfile: '',
        }
      
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser",this.user)
    },
  }
};
</script>

<style scoped>
.btn{
  background: purple;
}
</style>