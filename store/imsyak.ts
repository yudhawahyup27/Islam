import { defineStore } from "pinia";
import axios from "axios";

interface JadwalImsakiyah {
  tanggal: number;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

interface ImsakiyahData {
  provinsi: string;
  kabkota: string;
  hijriah: string;
  masehi: string;
  imsakiyah: JadwalImsakiyah[];
}

interface APIResponse {
  code: number;
  message: string;
  data: ImsakiyahData[];
}

export const useImsakiyahStore = defineStore("imsakiyah", {
  state: () => ({
    provinsiList: [] as string[],
    kabkotaList: [] as string[],
    jadwalImsakiyah: [] as JadwalImsakiyah[],
    hijriah: null as string | null,
    masehi: null as string | null,
    errorMessage: null as string | null,
    isLoading: false,
  }),

  getters: {
    hasJadwalData: (state) => state.jadwalImsakiyah.length > 0,

    sortedJadwal: (state) => {
      return [...state.jadwalImsakiyah].sort((a, b) => a.tanggal - b.tanggal);
    },

    todaySchedule: (state) => {
      const today = new Date().getDate();
      return state.jadwalImsakiyah.find((jadwal) => jadwal.tanggal === today);
    },
  },

  actions: {
    async fetchProvinsi() {
      this.isLoading = true;
      this.errorMessage = null;
      try {
        const response = await axios.get(
          "https://equran.id/api/v2/imsakiyah/provinsi"
        );
        if (response.data.code === 200) {
          this.provinsiList = response.data.data;
        } else {
          this.errorMessage = "Gagal memuat daftar provinsi";
        }
      } catch (error) {
        console.error("Error fetching provinsi:", error);
        this.errorMessage = "Gagal memuat daftar provinsi";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchKabkota(provinsi: string) {
      this.isLoading = true;
      this.errorMessage = null;
      try {
        const response = await axios.post(
          "https://equran.id/api/v2/imsakiyah/kabkota",
          {
            provinsi,
          }
        );
        if (response.data.code === 200) {
          this.kabkotaList = response.data.data;
        } else {
          this.errorMessage = "Gagal memuat daftar kota/kabupaten";
        }
      } catch (error) {
        console.error("Error fetching kabkota:", error);
        this.errorMessage = "Gagal memuat daftar kota/kabupaten";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchJadwalImsakiyah(provinsi: string, kabkota: string) {
      this.isLoading = true;
      this.errorMessage = null;
      try {
        const response = await axios.post<APIResponse>(
          "https://equran.id/api/v2/imsakiyah",
          {
            provinsi,
            kabkota,
          }
        );

        if (response.data.code === 200 && response.data.data.length > 0) {
          const imsakiyahData = response.data.data[0];
          this.jadwalImsakiyah = imsakiyahData.imsakiyah;
          this.hijriah = imsakiyahData.hijriah;
          this.masehi = imsakiyahData.masehi;
        } else {
          this.errorMessage = "Data jadwal tidak tersedia";
          this.clearJadwal();
        }
      } catch (error) {
        console.error("Error fetching jadwal imsakiyah:", error);
        this.errorMessage = "Gagal memuat jadwal imsakiyah";
        this.clearJadwal();
      } finally {
        this.isLoading = false;
      }
    },

    clearJadwal() {
      this.jadwalImsakiyah = [];
      this.hijriah = null;
      this.masehi = null;
    },
  },
});
