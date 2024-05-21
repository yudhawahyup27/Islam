<template>
  <div>
    <div v-for="doa in doas" :key="doa.id" class="my-4 mx-2">
      <div class="border-2 rounded-md p-2 border-green-700">
        <h2 class="text-green-700 font-bold">{{ doa.judul }}</h2>
        <div class="text-right text-md flex flex-col">
          <span>{{ doa.arab }}</span>
          <span class="text-sm">{{ doa.latin }}</span>
        </div>
        <small>{{ doa.terjemah }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { useDoaStore } from "~/store/doa";
export default {
  data() {
    return {
      doas: [],
    };
  },
  async created() {
    const doaStore = useDoaStore();
    await doaStore.fetchDoa();
    this.doas = doaStore.getDoa;
  },
};
</script>
