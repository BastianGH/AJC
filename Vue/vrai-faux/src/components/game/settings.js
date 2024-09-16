import { defineStore } from "pinia";

const useSettingsStore = defineStore("settings", {
  state: () => ({
    level: "facile",
    number: 0,
    categories: [],
  }),
});

export default useSettingsStore;
