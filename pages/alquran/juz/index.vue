<template>
  <div class="mx-2">
    <PartialsBanner
      bannerImage="https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-holy-alquran-background-design-image_590800.jpg"
      title="Al Quran"
      arabicText="عَنْ أَبي أُمَامَةَ الْبَاهِلِىُّ رضى الله عنه قَالَ سَمِعْتُ رَسُولَ اللَّهِ -صلى الله عليه وسلم- يَقُولُ اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِى يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ"
      translation="“Aisyah radhiyallahu ‘anha meriwayatkan bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: “Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala” (HR. Muslim)."
    />
    <div class="flex justify-center gap-4 my-4">
      <nuxt-link
        class="bg-green-700 text-center w-16 p-2 text-white rounded-md"
        to="/alquran"
      >
        Surah
      </nuxt-link>
      <nuxt-link
        class="bg-green-700 w-16 text-center p-2 text-white rounded-md"
        to="/alquran/juz/"
      >
        Juz
      </nuxt-link>
    </div>
    <div class="loading" v-if="loading">
      <Loading />
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4"
    >
      <CardJuz
        v-for="juz in juzs"
        :key="juz.number"
        :juz="juz"
        @selectJuz="handleSelectJuz"
      />
    </div>
  </div>
</template>

<script>
import Loading from "~/components/partials/loading.vue";
import PartialsBanner from "~/components/partials/banner.vue"; // Adjust path as needed
import CardJuz from "~/components/partials/alquran/cardJuz.vue";
import { useSuratStore } from "~/store/alquran";

export default {
  components: { Loading, PartialsBanner, CardJuz },
  data() {
    return {
      juzs: [],
      loading: true,
    };
  },
  async created() {
    const suratStore = useSuratStore();
    await suratStore.fetchJuz();
    this.juzs = suratStore.getJuz; // Ubah menjadi this.juzs = suratStore.getJuz;
    console.log(this.juzs, "yudha");
    this.loading = false;
  },
  methods: {
    handleSelectJuz(number) {
      this.$router.push({
        name: "alquran-Juz-nomor",
        params: { nomor: number },
      });
    },
  },
};
</script>

<style scoped>
.nuxt-link-active,
.router-link-active,
.router-link-exact-active {
  color: rgb(21, 128, 61);
  text-decoration: none;
  font-weight: bold;
  background-color: aliceblue;
}
</style>
