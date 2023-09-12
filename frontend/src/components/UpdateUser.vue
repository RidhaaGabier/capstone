<template>
  <div
    class="modal fade"
    :id="'exampleModal' + user.UserID"
    tabindex="-1"
    aria-labelledby="exampleModalLabelinfo"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabelinfo">{{ userData.FirstName }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateUser">
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.FirstName" :placeholder="user.FirstName"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Surname</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.LastName" :placeholder="user.LastName"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Role</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.UserRole" :placeholder="user.UserRole"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.UserEmail" :placeholder="user.UserEmail"
              />
            </div>
            
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Password</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.UserPass" :placeholder="user.UserPass"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Address</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.Address" :placeholder="user.Address"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Profile</label>
              <input
                type="text"
                class="form-control"
                id="recipient-na"
                autocomplete="off"
                required
                v-model="userData.UserProfile" :placeholder="user.UserProfile"
              />
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click.prevent="updateUser"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "updateUsersComp",
  props: ["user"],
  data() {
    return {
      // product: {
      // // Make sure to include a prop for prodID or remove it if not needed
      //   ProdName: '',
      //   Quantity: '',
      //   Amount: '',
      //   Category: '', // 'category' should be 'Category' to match the v-model
      //   ProdUrl: '',
      // }
      userData: {
        UserID: this.user.UserID, 
        FirstName: null,
        LastName: null,
        Address: null,
        UserPass: null,
        UserRole: null,
        UserEmail: null,
        UserProfile: null
      }
    }
  },
  methods: {
    updateUser() {
      console.log(this.userData);
      this.$store.dispatch("updateUsers", this.userData);
    },
  },
};
</script>
<style scoped>
.btn .btn-primary {
  align-content: center;
  text-align: center;
  justify-content: space-between;
  justify-content: center;
}
</style>