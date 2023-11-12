import axios from "axios";
import { defineStore } from "pinia";

export const useSurahStore = defineStore({
  id: "surah",
  state: () => ({
    surahs: [],
    surah: null,
    loading: false,
    error: null,
  }),
  getters: {
    getSurahs(state) {
      return state.surahs;
    },
  },
  actions: {

    async fetchSurahs() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://quran-api-id.vercel.app/surahs"
        );

        // Memastikan data berhasil diambil sebelum menetapkannya ke state
        if (response.status === 200) {
          this.surahs = response.data;
        }
      } catch (error) {
        console.error(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchSurah(number) {
    
      this.loading = true;
      try {
        const response = await axios.get(
          `https://quran-api-id.vercel.app/surahs/${number}`
        );

        // Memastikan data berhasil diambil sebelum menetapkannya ke state
        if (response.status === 200) {
          this.surah = response.data;
        }
      } catch (error) {
        console.error(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
