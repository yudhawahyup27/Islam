import axios from "axios";
import { defineStore } from "pinia";

export const useZakatStore = defineStore("zakat", {
  state: () => ({
    zakats: [],
  }),
  actions: {
    async fetchZakats() {
      try {
        const res = await axios.get("http://localhost:3000/zakat");
        this.zakats = res.data;
      } catch (error) {
        console.log("Error fetching zakats:", error);
      }
    },
  },
});
