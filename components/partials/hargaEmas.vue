<template>
  <div class="bg-green-700 text-white p-2 mx-2 rounded">
    <span>Nishab Emas 85 Gram</span>
    <p>{{ totalEmas ? formatRupiah(totalEmas) : "Loading..." }}</p>
    <span>Tanggal: {{ emas ? emas.update_gold_price : "Loading..." }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    emitHargaEmas: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      totalEmas: null,
      emas: null,
    };
  },
  methods: {
    async fetchEmas() {
      try {
        const response = await axios.get("https://gold-price.vercel.app/api");
        this.emas = response.data;
        const hargaPerGram = parseFloat(
          response.data.idr.gr.replace(/\./g, "").replace(",", ".")
        );
        if (!isNaN(hargaPerGram)) {
          this.totalEmas = hargaPerGram * 85;
          this.emitHargaEmas(this.totalEmas); // Emit the totalEmas value to parent component
        } else {
          console.error("Invalid gold price data");
        }
      } catch (error) {
        console.error("Error fetching gold price:", error);
      }
    },
    formatRupiah(angka) {
      const rupiah =
        "Rp " + angka.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
      return rupiah;
    },
  },
  mounted() {
    this.fetchEmas();
  },
};
</script>
