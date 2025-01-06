<template>
  <div>
    <PartialsHargaEmas :emitHargaEmas="setTotalEmas" />
    <h1 class="mx-2 my-4">Zakat Gaji</h1>
    <div class="mx-2">
      <h2 class="text-center">Akumulasi Gaji</h2>
      <small>Nilai Akhir Gaji Bulanan dan Terkumpul dalam 1 tahun</small>
      <div class="relative mx-2">
        <div
          class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-green-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </div>
        <input
          v-model="totalGaji"
          type="number"
          id="currency-input"
          class="block p-2.5 w-full z-20 ps-10 text-sm rounded-lg border-green-700 border-2 focus:ring-green-700"
          placeholder="Enter amount"
          required
        />
      </div>

      <div class="flex flex-col" v-if="totalZakat !== null">
        <span>Jumlah zakat yang wajib dibayarkan</span>
        <div
          class="bg-green-700 text-white p-2 rounded-lg flex justify-between"
        >
          <span class="text-lg font-bold">
            {{
              typeof totalZakat === "number"
                ? formatRupiah(totalZakat)
                : totalZakat
            }}
          </span>
          <div v-if="totalZakat >= 0">
            <nuxt-link
              class="bg-white p-2 text-green-700 rounded-md"
              to="/zakat/bayarzakat"
              >Bayar</nuxt-link
            >
          </div>
          <button
            class="bg-white p-2 text-green-700 rounded-md"
            v-else
            @click="resetTotalZakat"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emitTotalGaji: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      totalGaji: 0,
      totalZakat: 0,
      totalEmas: null,
    };
  },
  methods: {
    setTotalEmas(totalEmas) {
      this.totalEmas = totalEmas;
      this.calculateZakat();
    },
    calculateZakat() {
      if (this.totalGaji !== null && this.totalEmas !== null) {
        const zakat = this.totalGaji * 0.025; // Zakat adalah 2.5% dari total gaji
        if (zakat >= this.totalEmas) {
          this.totalZakat = zakat;
        } else {
          this.totalZakat = "Tidak Wajib Zakat"; // Tidak wajib zakat
        }
      }
    },
    formatRupiah(angka) {
      if (typeof angka !== "number") return angka;
      const rupiah =
        "Rp " + angka.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
      return rupiah;
    },
    resetTotalZakat() {
      this.totalZakat = 0;
      this.totalGaji = 0;
    },
  },
  watch: {
    totalGaji: {
      handler() {
        this.calculateZakat();
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
