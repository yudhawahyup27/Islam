import { defineStore } from "pinia";

import axios from "axios";

export const useSuratStore = defineStore("surat", {
  state: () => ({
    surats: [],
  }),
  getters: {
    getSurats(state) {
      return state.surats;
    },
  },
  actions: {
    async fetchSurats() {
      try {
        const data = await axios.get("https://equran.id/api/surat");
        this.surats = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
