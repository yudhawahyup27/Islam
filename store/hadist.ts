// store/hadist.js
import { defineStore } from "pinia";
import axios from "axios";

export const useHadithStore = defineStore("hadith", {
  state: () => ({
    hadiths: [],
    totalHadiths: 0,
    currentPage: 1,
    limit: 20,
    loading: false,
  }),
  getters: {
    getHadiths(state) {
      return state.hadiths;
    },
  },
  actions: {
    async fetchHadiths() {
      try {
        this.loading = true;
        const { data } = await axios.get("https://api.hadith.gading.dev/books");
        this.hadiths = data.data;
      } catch (error) {
        console.error("Error fetching hadiths:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchHadithDetails(name: string, page: number, limit: number) {
      try {
        const response = await axios.get(
          `https://api.hadith.gading.dev/books/${name}?range=${page}-${
            page + limit - 1
          }`
        );
        if (response.data.code === 200 && !response.data.error) {
          this.hadiths = response.data.data.hadiths;
          this.totalHadiths = response.data.data.available;
          this.currentPage = page;
        } else {
          console.error(
            "Error fetching hadith details:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching hadith details:", error);
      }
    },
    async fetchHadithDetailsBySurahId(id: number, name: string) {
      try {
        const response = await axios.get(
          `https://api.hadith.gading.dev/books/${name}/${id}`
        );
        this.hadiths = response.data.data; // Assuming the data is in the 'data' property
      } catch (error) {
        console.error("Error fetching hadith details by Surah ID:", error);
      }
    },
  },
});
