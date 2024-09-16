<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{{ count }}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          @click="add"
          type="button"
          class="btn btn-primary btn-lg px-4 gap-3"
        >
          +
        </button>
        <button
          @click="substract"
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCounterStore from "../stores/counter";
import { computed, reactive } from "vue";

const store = useCounterStore();
const count = computed(() => store.counter);

const add = () => store.counter++;
const substract = () => store.counter--;
console.log(store.counter);
</script>
