<template>
  <div class="mx-4 my-6">
    <div v-if="loading" class="flex justify-center items-center">
      <Loading />
    </div>
    <div v-else>
      <form class="max-w-md mx-auto my-4">
        <div class="relative">
          <input
            v-model="searchTerm"
            type="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Asmaul Husna"
          />
        </div>
      </form>

      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div
          v-for="(asma, index) in filteredData"
          :key="index"
          :class="[
            asma.color,
            'w-30 h-30 text-center py-4 text-white flex flex-col justify-center items-center shadow rounded-md',
          ]"
        >
          <div
            class="bg-white rounded-full w-10 h-10 text-green-600 flex justify-center items-center text-lg font-bold"
          >
            {{ index + 1 }}
          </div>
          <h4 class="text-md mt-2">{{ asma.arab }}</h4>
          <h5>{{ asma.latin }}</h5>
          <span class="bg-white text-xs text-green-400 my-1 p-2 rounded-md mx-2">
            {{ asma.arti }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Loading from "~/components/partials/loading.vue";
import { useAsmaStore } from "~/store/asma";

interface Asma {
  name: string;
  arab: string;
  latin: string;
  arti: string;
  color: string;
}

const loading = ref<boolean>(true);
const searchTerm = ref<string>("");
const asmas = ref<Asma[]>([]);

const colors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-violet-500",
  "bg-sky-500",
];

function getRandomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

onMounted(async () => {
  const store = useAsmaStore();
  await store.fetchAsma();
  asmas.value = store.getAsma.map((asma: Asma) => ({
    ...asma,
    color: getRandomColor(),
  }));

  loading.value = false; // Matikan loading setelah data didapat
});

const filteredData = computed(() => {
  if (!searchTerm.value.trim()) return asmas.value;

  return asmas.value.filter((asma: Asma) => 
    asma.latin.toLowerCase().includes(searchTerm.value.toLowerCase()) // Perbaikan return filter
  );
});
</script>
