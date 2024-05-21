import { defineStore } from "pinia";
import axios from "axios";

export const useSuratStore = defineStore("surat", {
  state: () => ({
    surats: [],
    surat: null, // Add a state to hold a single surat
    loading: false,
    error: null,
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
        const { data } = await axios.get(
          "https://quran-endpoint.vercel.app/quran"
        );
        this.surats = data.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchSuratById(nomor: number) {
      console.log("action fetchSuratById");
      try {
        this.loading = true;
        console.log("aku padamu");
        const { data } = await axios.get(
          `https://quran-endpoint.vercel.app/quran/${nomor}`
        );
        this.surat = data.data;
      } catch (error: any) {
        console.error("Error fetching data:", error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
