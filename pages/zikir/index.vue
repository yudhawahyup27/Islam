<template>
  <div>
    <h2>Dzikir dengan Pengulangan 1x:</h2>
    <ul>
      <li v-for="item in dzikir1x" :key="item.arab">{{ item.arab }}</li>
    </ul>

    <h2>Dzikir dengan Pengulangan 3x:</h2>
    <ul>
      <li v-for="item in dzikir3x" :key="item.arab">{{ item.arab }}</li>
    </ul>

    <!-- Sisipkan bagian untuk dzikir dengan pengulangan 10x dan 100x jika perlu -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dzikirData: [],
    };
  },
  computed: {
    dzikir1x() {
      return this.dzikirData.filter((item) => item.ulang === "1x");
    },
    dzikir3x() {
      return this.dzikirData.filter((item) => item.ulang === "3x");
    },
    // Buat computed properties untuk dzikir dengan pengulangan 10x dan 100x jika perlu
  },
  mounted() {
    this.fetchDzikirData();
  },
  methods: {
    fetchDzikirData() {
      fetch("https://api.dikiotang.com/dzikir/pagi")
        .then((response) => response.json())
        .then((data) => {
          this.dzikirData = data.data;
        })
        .catch((error) => console.error("Terjadi kesalahan:", error));
    },
  },
};
</script>

<style>
/* Tambahkan gaya CSS sesuai kebutuhan */
</style>
