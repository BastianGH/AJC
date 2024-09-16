import { defineStore } from "pinia";

const usePlayStore = defineStore("play", {
  state: () => ({
    play: false,
  }),
});

export default usePlayStore;
