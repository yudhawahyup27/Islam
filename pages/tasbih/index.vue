<template>
  <div class="text-center my-2">
    <h1 class="text-center">Tasbih Online</h1>
    <h2 class="mx-auto rounded-full p-2 my-2 text-white bg-green-700 w-10 h-10">
      {{ jumlahDzikir }}
    </h2>

    <input
      type="number"
      class="border-2 border-green-500 my-4"
      v-model="target"
    />

    <div class="flex justify-center">
      <button
        @click.prevent="clickDzikir"
        class="bg-green-700 my-4 p-4 w-44 h-44 text-white rounded-full"
      >
        Click
      </button>
      <button
        @click.prevent="reset"
        class="bg-green-700 my-4 p-4 w-44 h-44 text-white rounded-full"
      >
        reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reset = () => {
  jumlahDzikir.value = 0;
};

const jumlahDzikir = ref(0);
const target = ref(33); // Inisialisasi nilai target

const clickDzikir = () => {
  if (jumlahDzikir.value === target.value) {
    jumlahDzikir.value = 0;
  } else {
    jumlahDzikir.value++;
  }
};
</script>

<style></style>
