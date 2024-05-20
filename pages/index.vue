<template>
  <div>
    <PartialsLandingBanner />
    <!-- Quotes -->
    <div class="grid grid-cols-1 md:grid-cols-2 p-4 my-4 shadow-sm mx-4">
      <div>
        <h1 class="text-center my-4 text-green-700 font-bold text-clip">
          Daily Random Surah
        </h1>
      </div>
      <div v-if="surah">
        <img :src="surah.image.primary" alt="Surah " style="max-width: 100%" />
        <p class="text-right">{{ surah.translation }}</p>
      </div>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      surah: null,
    };
  },
  mounted() {
    this.getDailyRandomSurah();
  },
  methods: {
    async getDailyRandomSurah() {
      try {
        const response = await axios.get(
          "https://quran-api-id.vercel.app/random"
        );
        this.surah = response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Tambahkan styling sesuai kebutuhan */
</style>
