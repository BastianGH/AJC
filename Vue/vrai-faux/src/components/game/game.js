import { defineStore } from "pinia";

const useGameStore = defineStore("game", {
  state: () => ({
    note: 0,
    ratio: 0,
  }),
});

export default useGameStore;
