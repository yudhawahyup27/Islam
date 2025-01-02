import { defineStore } from "pinia";
import axios from "axios";

export const useAsmaStore = defineStore("asma", {
  state: () => ({
    asmas: [],
    loading: false,
  }),
  getters: {
    getAsma(state) {
      return state.asmas;
    },
  },
  actions: {
    async fetchAsma() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          "https://asmaul-husna-api.vercel.app/api/all"
        );
        this.asmas = data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
