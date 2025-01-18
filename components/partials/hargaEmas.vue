<template>
  <div class="bg-green-700 text-white p-2 mx-2 rounded">
    <span>Nishab Emas 85 Gram</span>
    <h1>
      {{ totalEmas ? formatRupiah(totalEmas) : "Loading..." }}
    </h1>
    <p>Tanggal: {{ emas ? emas.update_gold_price : "Loading..." }}</p>
    <small class="text-xs">harga emas :{{ emas?.kurs_bi.kg }}/gram</small>
    <p>
      source :
      <nuxt-link :to="emas?.source" class="text-white"
        >harga-emas.org</nuxt-link
      >
    </p>
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
          response.data.kurs_bi.kg.replace(/\./g, "").replace(",", ".")
        );
        if (!isNaN(hargaPerGram)) {
          // Mengalikan harga per gram dengan 85 gram
          this.totalEmas = hargaPerGram * 85;
          this.emitHargaEmas(this.totalEmas); // Emit totalEmas ke komponen induk
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
