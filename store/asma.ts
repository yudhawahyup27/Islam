import { defineStore } from "pinia";
import axios from "axios";

export const useAsmaStore = defineStore("asma", {
  state: () => ({
    asmas: [],
  }),
  getters: {
    getAsma(state) {
      return state.asmas;
    },
  },
  actions: {
    async fetchAsma() {
      try {
        const { data } = await axios.get(
          "https://api.dikiotang.com/quran/asma"
        );
        this.asmas = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
