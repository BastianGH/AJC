import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
});

export default useCounterStore;
