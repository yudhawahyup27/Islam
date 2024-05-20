import { defineStore } from "pinia";
import axios from "axios";

export const useSuratStore = defineStore("surat", {
  state: () => ({
    surats: [],

    surat: null, // Add a state to hold a single surat
  }),
  getters: {
    getSurats(state) {
      return state.surats;
    },
    getSurat(state) {
      return state.surat;
    },
  },
  actions: {
    async fetchSurats() {
      try {
        const { data } = await axios.get("https://equran.id/api/surat");
        this.surats = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSuratById(nomor: number) {
      try {
        const response = await fetch(`https://equran.id/api/surat/${nomor}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        this.surat = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
