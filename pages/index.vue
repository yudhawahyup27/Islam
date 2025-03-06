<template>
  <div>
    <PartialsLandingBanner />

    <div class="grid grid-cols-3 md:grid-cols-4 justify-items-center my-4">
      <nuxt-link
        v-for="(item, index) in displayIcon"
        :key="index"
        :to="item.to"
        class="text-center max-w-24 text-green-700 font-bold"
      >
        <div class="p-4 rounded-lg shadow-xl hover:shadow-none">
          <img
            width="64"
            class="mx-auto"
            height="64"
            :src="item.img"
            :alt="item.label"
          />
        </div>
        <span>{{ item.label }}</span>
      </nuxt-link>
    </div>
    <div class="text-center mt-4">
      <button
        @click="toggleShowAll"
        class="bg-green-700 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600"
      >
        {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Semua" }}
      </button>
    </div>
    <!-- Quotes -->
    <div class="grid grid-cols-1 md:grid-cols-2 p-4 my-4 shadow-sm mx-4">
      <div class="flex justify-center align-middle my-auto">
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
      showAll: false,
      isMediumScreen: false, // Untuk mendeteksi ukuran layar medium
      surah: null,
      Icon: [
        {
          to: "/sholat",
          img: "https://cdn-icons-png.flaticon.com/128/5003/5003209.png",
          label: "Sholat",
        },
        {
          to: "/alquran",
          img: "https://cdn-icons-png.flaticon.com/128/3165/3165231.png",
          label: "Alquran",
        },
        {
          to: "/doa",
          img: "https://cdn-icons-png.flaticon.com/128/9991/9991939.png",
          label: "Doa",
        },
        {
          to: "/tasbih",
          img: "https://cdn-icons-png.flaticon.com/128/15320/15320774.png",
          label: "Tasbih",
        },
        {
          to: "/asma",
          img: "https://cdn-icons-png.flaticon.com/128/2914/2914720.png",
          label: "Asmaul husna",
        },
        // {
        //   to: "/zikir",
        //   img: "https://cdn-icons-png.flaticon.com/128/14192/14192559.png",
        //   label: "Zikir",
        // },
        {
          to: "/hadist",
          img: "https://cdn-icons-png.flaticon.com/128/4407/4407161.png",
          label: "Hadist",
        },
        {
          to: null,
          img: "https://cdn-icons-png.flaticon.com/128/4840/4840215.png",
          label: "Kurban (soon)",
        },
        {
          to: "/zakat",
          img: "https://cdn-icons-png.flaticon.com/128/2645/2645341.png",
          label: "Zakat",
        },
        // {
        //   to: "/jadwal-imsyakkiyah",
        //   img: "https://cdn-icons-png.flaticon.com/128/4358/4358736.png",
        //   label: "Jadwal Imsyakkiyah",
        // },
      ],
    };
  },
  mounted() {
    this.detectScreenSize();
    window.addEventListener("resize", this.detectScreenSize);
    this.getDailyRandomSurah();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.detectScreenSize);
  },
  computed: {
    displayIcon() {
      if (this.showAll) {
        return this.Icon;
      }
      return this.isMediumScreen
        ? this.Icon.slice(0, 8)
        : this.Icon.slice(0, 6);
    },
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    detectScreenSize() {
      this.isMediumScreen = window.innerWidth >= 768; // Sesuaikan ukuran md di Tailwind (default 768px)
    },
    async getDailyRandomSurah() {
      try {
        setInterval(async () => {
          const response = await axios.get(
            "https://quran-api-id.vercel.app/random"
          );
          this.surah = response.data;
        }, 5000);
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
