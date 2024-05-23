<template>
  <div class="mx-4">
    <div
      v-if="hadiths.length"
      class="grid grid-cols-1 text-justify md:grid-cols-2 gap-2"
    >
      <div
        v-for="(hadith, index) in hadiths"
        :key="index"
        class="bg-green-700 flex justify-between w-full p-2 rounded-md"
      >
        <div class="">
          <nuxt-link
            class="flex flex-col text-white p-2 gap-4"
            :to="`/hadist/detail/${$route.params.name}/${hadith.number}`"
          >
            <div class="number">
              <span>{{ hadith.number }}</span>
            </div>
            <p>{{ hadith.arab }}</p>
            <p>{{ hadith.id }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="loading" v-else>
      <PartialsLoading />
    </div>
    <div class="flex justify-center mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="mx-2 p-2 bg-gray-300 rounded"
      >
        Previous
      </button>
      <span>Page {{ currentPage }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage * limit >= totalHadiths"
        class="mx-2 p-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { useHadithStore } from "~/store/hadist";

export default {
  setup() {
    const route = useRoute();
    const name = route.params.name;

    const hadithStore = useHadithStore();

    const hadiths = ref([]);
    const currentPage = ref(1);
    const limit = ref(20);
    const totalHadiths = ref(0);

    const fetchHadithDetails = async (name, page, limit) => {
      await hadithStore.fetchHadithDetails(name, page, limit);
      hadiths.value = hadithStore.hadiths;
      currentPage.value = hadithStore.currentPage;
      totalHadiths.value = hadithStore.totalHadiths;
    };

    watch(
      () => route.params.name,
      async (newName) => {
        currentPage.value = 1; // Reset currentPage when name changes
        await fetchHadithDetails(newName, currentPage.value, limit.value);
      },
      { immediate: true }
    );

    const prevPage = async () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        await fetchHadithDetails(name, currentPage.value, limit.value);
      }
    };

    const nextPage = async () => {
      if (currentPage.value * limit.value < totalHadiths.value) {
        currentPage.value++;
        await fetchHadithDetails(name, currentPage.value, limit.value);
      }
    };

    return {
      hadiths,
      currentPage,
      limit,
      totalHadiths,
      prevPage,
      nextPage,
    };
  },
};
</script>

<style scoped>

</style>
