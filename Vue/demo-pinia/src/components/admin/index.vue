<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count:{{ count }} </strong>
      </p>

      <div>
        <label class="form-label">By how much</label>
        <input type="number" class="form-control" v-model="data.amount" />
      </div>
      <br />

      <button type="button" class="btn btn-primary me-3">+</button>
      <button type="button" class="btn btn-outline-secondary">-</button>
    </div>
  </div>
</template>

<script setup>
import useCounterStore from "../stores/counter";
import { computed, reactive } from "vue";

const store = useCounterStore();
const count = computed(() => store.counter);

const data = reactive({
  amount: 1,
});
</script>
