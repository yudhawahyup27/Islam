import { defineStore } from "pinia";
import axios from "axios";

export const useDoaStore = defineStore("doa", {
  state: () => ({
    doas: [],
  }),
  getters: {
    getDoa(state) {
      return state.doas;
    },
  },
  actions: {
    async fetchDoa() {
      try {
        const { data } = await axios.get(
          "https://open-api.my.id/api/doa"
        );
        console.log("Response data:", data); // Add this line
        this.doas = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
