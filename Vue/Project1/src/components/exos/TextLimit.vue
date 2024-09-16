<script setup>
import { ref } from "vue";
const props = defineProps(["limit"]);
let inputLen = ref(0); // mise en state de la longueur de la saisie
let alertInput = false;
const alertThreshold = 75 / 100;
const alertColor = ref("#000");

function onKeyup(event) {
  let len = event.target.value.length;
  if (len <= props.limit) {
    inputLen.value = len;
    //alertInput = len > Math.floor(parseInt(props.limit) * alertThreshold);
    if (len > Math.floor(parseInt(props.limit) * alertThreshold)) {
      alertInput = true;
      alertColor.value = "#ff0000";
    } else {
      alertColor.value = "#000";
    }
  } else {
    event.target.value = event.target.value.substr(0, props.limit);
  }
}
</script>

<template>
  <div>
    <h3>TextLimit</h3>
    <textarea @keyup="onKeyup"></textarea>

    <!-- en utilisant :class -->
    <!-- <span :class="{ 'big-alert': alertInput }">{{ inputLen }}</span> / <span>{{ limit }}</span> -->

    <!-- en utilisant :style -->
    <span :style="{ color: alertColor }">{{ inputLen }}</span> /
    <span>{{ limit }}</span>
  </div>
</template>

<style scoped>
.big-alert {
  color: red;
}
</style>
