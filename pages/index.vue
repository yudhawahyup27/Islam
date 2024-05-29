<template>
  <div>
    <PartialsLandingBanner />

    <div class="grid grid-cols-3 md:grid-cols-4 justify-items-center">
      <div class="text-center max-w-24 text-green-700 font-bold">
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Sholat (Soon)</span>
      </div>
      <nuxt-link
        to="/alquran"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Alquran</span>
      </nuxt-link>
      <nuxt-link
        to="/doa"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Doa</span>
      </nuxt-link>
      <nuxt-link
        to="/tasbih"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Tasbih</span>
      </nuxt-link>
      <nuxt-link
        to="/asma"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Asmaul husna</span>
      </nuxt-link>
      <div class="text-center max-w-24 text-green-700 font-bold">
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Zikir</span>
      </div>
      <nuxt-link
        to="/hadist"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Hadist</span>
      </nuxt-link>
      <div class="text-center max-w-24 text-green-700 font-bold">
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Kurban (soon)</span>
      </div>
      <div class="text-center max-w-24 text-green-700 font-bold">
        <div class="p-4 rounded-lg shadow-xl">
          <img
            width="64"
            class="mx-auto"
            height="64"
            src="../assets/img/tasbih.png"
            alt="external-Scripture-islamic-flat-icon-filled-line-kendis-lasman"
          />
        </div>
        <span>Zakat (soon)</span>
      </div>
    </div>

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
