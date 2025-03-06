<template>
  <div class="mx-4 my-6">
    <div v-if="loading" class="flex justify-center items-center">
      <Loading />
    </div>
    <div v-else class="grid md:grid-cols-4 grid-cols-2 gap-4">
      <div
        v-for="(asma, index) in asmas"
        :key="index"
        :class="[
          asma.color,
          ' w-30 h-30 text-center py-4 text-white flex flex-col justify-center items-center shadow rounded-md ',
        ]"
      >
        <div
          class="bg-white rounded-full w-10 h-10 text-green-600 flex justify-center items-center text-lg font-bold"
        >
          {{ index + 1 }}
        </div>
        <h4 class="text-md mt-2">{{ asma.arab }}</h4>
        <h5>{{ asma.latin }}</h5>
        <span class="bg-white text-xs text-green-400 my-1 p-2 rounded-md mx-2">{{
          asma.arti
        }}</span>
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

const color = ref<string>("");

function getrandom(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

onMounted(async (): Promise<void> => {
  const store = useAsmaStore();
  await store.fetchAsma();
  asmas.value = store.getAsma.map((asma: Asma) => ({
    ...asma,
    color: getrandom(),
  }));
  loading.value = false; // Matikan loading
});
</script>
