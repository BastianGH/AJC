<template>
  <h2>Add users</h2>
  <div v-if="loading">
    <app-loader />
  </div>
  <div v-if="!loading">
    <div class="form-group mb-3">
      <label>Name</label>
      <input class="form-control" type="text" v-model="user.name" />
    </div>

    <div class="form-group mb-3">
      <label>Lastname</label>
      <input class="form-control" type="text" v-model="user.lastname" />
    </div>

    <button class="btn btn-primary" @click.prevent="addUser()">Submit</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const loading = ref(false);
const user = reactive({
  name: "",
  lastname: "",
});

//const { loading, addUser } = postUser(user);

import axios from "axios";
import { useToast } from "vue-toast-notification";
// import { reactive, ref } from "vue";

const $toast = useToast();

const submitForm = () => {
  loading.value = true;

  axios({
    method: "POST",
    url: "http://localhost:3004/users",
    data: user,
  })
    .then(() => {
      $toast.success("Great dude !!!");
    })
    .catch((error) => {
      $toast.error("Sorry, something went wrong");
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
