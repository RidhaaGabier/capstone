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
          <h1 class="modal-title fs-5" id="exampleModalLabelinfo">{{ user.FirstName }}</h1>
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
                v-model="user.FirstName"
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
                v-model="user.LastName"
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
                v-model="user.UserRole"
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
                v-model="user.UserEmail"
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
                v-model="user.UserPass"
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
                v-model="user.Address"
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
                v-model="user.UserProfile"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
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
  // data() {
  //   return {
      // product: {
      // // Make sure to include a prop for prodID or remove it if not needed
      //   ProdName: '',
      //   Quantity: '',
      //   Amount: '',
      //   Category: '', // 'category' should be 'Category' to match the v-model
      //   ProdUrl: '',
      // }
      // user: {
      //   FirstName: '',
      //   LastName: '',
      //   UserRole: '',
      //   UserEmail: '',
      //   UserPass: '',
      //   Address: '',
      //   pro
  //     }
  //   }
  // }
  methods: {
    updateUser() {
      this.$store.dispatch("updateUsers", this.user);
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