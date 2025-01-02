import { defineStore } from "pinia";
import axios from "axios";

export const useSuratStore = defineStore("surat", {
  state: () => ({
    surats: [],
    // juzs: [],
    surat: null, // Add a state to hold a single surat
    loading: false,
    error: null,
  }),
  getters: {
    // getJuz(state) {
    //   return state.juzs;
    // },
    getSurats(state) {
      return state.surats;
    },
    getSurat(state) {
      return state.surat;
    },
  },
  actions: {
    async fetchSurats() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await axios.get("https://equran.id/api/surat");
        this.surats = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    // async fetchJuz() {
    //   this.loading = true;
    //   try {
    //     const { data } = await axios.get(
    //       "https://api.dikiotang.com/quran/juz/"
    //     );
    //     this.juzs = data.data;
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
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
