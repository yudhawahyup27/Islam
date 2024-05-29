<template>
  <div>
    <PartialsBanner
      bannerImage="https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-holy-alquran-background-design-image_590800.jpg"
      title="Al Quran"
      arabicText="`عَنْ أَبي أُمَامَةَ الْبَاهِلِىُّ رضى الله عنه قَالَ سَمِعْتُ رَسُولَ اللَّهِ -صلى الله عليه وسلم- يَقُولُ اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِى يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ`"
      translation="“Aisyah radhiyallahu ‘anha meriwayatkan bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: “Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala” (HR. Muslim)."
    />
    <div v-for="doa in doas" :key="doa.index" class="my-4 mx-2">
      <div class="border-2 rounded-md p-2 border-green-700">
        <h2 class="text-green-700 font-bold">{{ doa.judul }}</h2>
        <div class="text-right text-md flex flex-col">
          <span>{{ doa.arab }}</span>
          <small>{{ doa.indo }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartialsBanner from "~/components/partials/banner.vue"; // Adjust the import path as needed
import { useDoaStore } from "~/store/doa";

export default {
  components: {
    PartialsBanner,
  },
  data() {
    return {
      doas: [],
    };
  },
  computed: {
    doaStore() {
      return useDoaStore();
    },
  },
  async created() {
    const doaStore = useDoaStore();
    await doaStore.fetchDoa();
    this.doas = doaStore.getDoa;
  },
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
