<script setup>
import { ref } from "vue";
import { random, replaceAt } from "./helpers";

const props = defineProps(["withLetters"]);
//let len = 4;
const input = ref("");
const code = ref("");

function generateCode() {
  //console.log("typeof withLetters => ", typeof props.withLetters);
  //console.log("Code length: " + input.value);
  var min = 10 ** (input.value - 1);
  var max = 10 ** input.value - 1;
  //console.log("code min: " + min);
  //console.log("code max: " + max);
  var randValue = random(min, max);

  if (props.withLetters === true) {
    // ensemble de lettres dans lequel puiser
    var setLetters = ["a", "h", "n", "p", "x"];
    // nombre de lettres à ajouter
    var numLetters = parseInt(input.value / 2);
    //console.log("numLetters : " + numLetters);
    // conversion du code numérique en chaîne de caractères pour remplacement de caractères
    var codeTxt = randValue.toString();
    //console.log(codeTxt);
    // itère sur le nombre de lettres à ajouter au code
    for (var i = 0; i < numLetters; i++) {
      var randIndex = random(0, input.value);
      //console.log("randIndex: " + randIndex);
      var randLetter = setLetters[random(0, setLetters.length - 1)];
      //console.log("randLetter : " + randLetter);
      codeTxt = replaceAt(randIndex, codeTxt, randLetter);
    }
    //console.log(codeTxt);
    code.value = codeTxt; // state update
  } else {
    code.value = randValue; // state update
  }
}

function onKeyup(e) {
  //console.log(e.key)
  //input.value += 'x';
  input.value = e.target.value; // state update
  //console.log("e.target.value => ", e.target.value);
  //console.log("input.value => ", input.value);

  if (input.value < 3 || input.value > 20) {
    code.value = "";
  }
}
</script>

<template>
  <div>
    <h3>CodeGen</h3>
    <!-- <input v-model="len" type="text" /> -->
    <input @keyup="onKeyup" :value="input" type="text" />
    <br />
    <button @click="generateCode" :disabled="input < 4 || input > 20">
      Générer le code
    </button>
    <p>{{ code }}</p>
  </div>
</template>
