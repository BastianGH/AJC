<template>
  <div>
    <app-header />
    <div class="container">
      <UserProfile
        :alsoKnownAs="data.name"
        :userLastname="data.lastname"
        :userAge="data.age"
        :userParents="data.parents"
        @update-lastname="data.lastname = $event"
        @say-hello="alertHello"
        :updateAge="updateAge"
      />
      <button @click="updateName">Update name</button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/header_footer/footer.vue";
import UserProfile from "@/components/User/profile.vue";
import { reactive } from "vue";

const data = reactive({
  name: "Rocket",
  lastname: "Jones",
  age: 28,
  parents: {
    father: "Mario",
    mother: "Martha",
  },
});

const updateName = () => {
  data.name = "Golden child";
};

const alertHello = () => {
  alert("Hello !!!");
};

const updateAge = (value) => {
  data.age = value;
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
