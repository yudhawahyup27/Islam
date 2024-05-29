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
        const { data } = await axios.get("https://api.dikiotang.com/doa/");
        console.log("Response data:", data); // Debugging line
        this.doas = data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
