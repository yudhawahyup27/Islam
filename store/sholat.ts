// stores/sholat.js
import { defineStore } from "pinia";
import axios from "axios";

export const useSholatStore = defineStore("sholat", {
  state: () => ({
    jadwal: null,
    kotaList: [],
  }),
  actions: {
    async fetchKota(namaKota: String) {
      try {
        const response = await axios.get(
          `https://api.myquran.com/v2/sholat/kota/cari/${namaKota}`
        );
        if (response.data.status && response.data.data.length > 0) {
          this.kotaList = response.data.data;
        } else {
          this.kotaList = [];
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    },
    async fetchJadwal(idKota: any, date: any) {
      try {
        const response = await axios.get(
          `https://api.myquran.com/v2/sholat/jadwal/${idKota}/${date}`
        );
        if (response.data.status) {
          this.jadwal = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    },
  },
});
