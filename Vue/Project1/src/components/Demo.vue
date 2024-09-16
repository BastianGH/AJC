<script setup>
import { ref } from "vue";
import User from "./User.vue";

const title = "Formations vuejs - Demo";
let n = ref(1);
const user1 = { lastname: "Visconti", age: 56 };

function onClick() {
  console.log("click");
  n.value += 1;
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ n }}</p>
    <button v-on:click="onClick">Click</button>
    <button @click="onClick">Click</button>
    <hr />
    <User lastname="Fellini" age="8" />
    <User :lastname="user1.lastname" :age="user1.age" />
  </div>
</template>
