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
      <!-- <nuxt-link class="bg-green-700 w-16 text-center p-2 text-white rounded-md" to="/alquran/juz/">
        Juz
      </nuxt-link> -->
    </div>
    <div class="loading" v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <form class="max-w-md mx-auto">
        <div class="relative">
          <input
            v-model="searchTerm"
            type="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Surah  (Al-fatihah)"
          />
        </div>
      </form>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4">
        <CardAlquran
          v-for="surat in filteredSurats"
          :key="surat.nomor"
          :surat="surat"
          @selectSurah="handleSelectSurah"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSuratStore } from "~/store/alquran";
import Loading from "~/components/partials/loading.vue";
import PartialsBanner from "~/components/partials/banner.vue";
import CardAlquran from "~/components/partials/alquran/cardAlquran.vue";

const router = useRouter();
const suratStore = useSuratStore();
const searchTerm = ref("");

const searchSurah = ref("");
const loading = ref(true);

onMounted(async () => {
  await suratStore.fetchSurats();
  loading.value = false;
});

const filteredSurats = computed(() => {
  if (!searchTerm.value) return suratStore.surats;
  return suratStore.surats.filter((surat) =>
    surat.nama_latin.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const handleSelectSurah = (nomor) => {
  router.push({ name: "alquran-surah-nomor", params: { nomor } });
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
