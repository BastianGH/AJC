<template>
  <div class="switch" @click="onClick" :class="{ off: isOff }">
    <span :style="{ 'margin-left': marginLeft }">{{ text }}</span>
    <div :style="{ left: left }" class="circle"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("oui");
const isOff = ref(false);
const marginLeft = ref("0"); // marge du texte
const left = ref("62px"); // position du cercle

const onClick = () => {
  if ((isOff.value = text.value === "oui")) {
    text.value = "non";
    marginLeft.value = "46px";
    left.value = "2px";
  } else {
    text.value = "oui";
    marginLeft.value = "0";
    left.value = "62px";
  }
  console.log(isOff.value ? 0 : 1);
};
</script>

<style scoped>
.switch {
  background-color: #66cf91;
  padding: 10px;
  width: 80px;
  border-radius: 18px;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  position: relative;
  margin: 4px;
  font-size: 14pt;
}

.circle {
  position: absolute;
  top: 2px;
  left: 62px;
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
}

.off {
  background-color: #ccc;
  color: #aaa;
}
</style>
