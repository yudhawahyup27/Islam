<template>
  <div class="mx-4">
    <h1 class="text-center">Hadith Collections</h1>
    <div class="loading flex mx-4 items-center justify-center" v-if="Loading">
      <PartialsLoading />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        v-for="hadith in hadiths"
        :key="hadith.id"
        class="bg-green-700 flex justify-between w-full p-2 rounded-md"
      >
        <div class="flex flex-col text-white">
          <h2>{{ hadith.name }}</h2>
          <span class="text-white">
            total <small> {{ hadith.available }} </small>
          </span>
        </div>
        <NuxtLink
          :to="`/hadist/${hadith.id}`"
          class="border-2 border-white text-white p-2 rounded-lg text-xs"
        >
          Baca Hadist
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { useHadithStore } from "~/store/hadist";
import PartialsLoading from "~/components/partials/loading.vue";

export default {
  components: {
    PartialsLoading,
  },
  data() {
    return {
      Loading: true,
      hadiths: [],
    };
  },
  async mounted() {
    const hadithsStore = useHadithStore();
    await hadithsStore.fetchHadiths();
    this.hadiths = hadithsStore.getHadiths;
    this.Loading = false;
  },
};
</script>

<style>
.number {
  background-image: url("/assets/img/number.svg");

  margin: 14px 16px 0 0;
  width: 41px;
  height: 48px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
