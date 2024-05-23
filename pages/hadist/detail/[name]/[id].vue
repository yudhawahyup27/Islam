<template>
  <div class="mx-4">
    <h1 class="text-center">Hadith Detail</h1>
    <div
      v-if="hadithDetail"
      class="px-2 py-4 flex bg-green-700 text-white h-full"
    >
      <div>
        <h2>{{ hadithDetail.number }}</h2>
        <p>{{ hadithDetail.arab }}</p>
        <p>{{ hadithDetail.id }}</p>
      </div>
    </div>
    <div class="loading" v-else>
      <PartialsLoading />
    </div>
  </div>
</template>

<script>
import { useHadithStore } from "~/store/hadist";

export default {
  setup() {
    const route = useRoute();
    const hadithStore = useHadithStore();
    const hadithDetail = ref(null);

    const fetchHadithDetail = async (id, name) => {
      await hadithStore.fetchHadithDetailsBySurahId(id, name);
      hadithDetail.value = hadithStore.hadiths.contents;
    };

    onMounted(() => {
      const { id, name } = route.params;
      fetchHadithDetail(id, name);
    });

    return {
      hadithDetail,
    };
  },
};
</script>

<style scoped></style>
