<template>
  <div class="text-center">
    <h1 class="text-center font-bold text-green-700 mt-5">Tasbih Online</h1>

    <div class="flex my-44 flex-col justify-center items-center">
      <h2
        @click.prevent="clickDzikir"
        class="mx-auto rounded-full p-2 flex justify-center items-center text-xl font-bold text-white bg-green-700 w-20 h-20"
      >
        {{ counter }}
      </h2>
      <div
        :class="{ 'grid-cols-1': counter === 0, 'grid-cols-2': counter !== 0 }"
        class="grid gap-4"
      >
        <button
          :class="{ hidden: counter == 0 }"
          @click.prevent="reset"
          class="text-xs my-4 p-1 text-green-700"
        >
          Reset
        </button>
        <input
          type="number"
          class="border-green-500 text-center my-4"
          v-model="target"
          min="0"
        />
      </div>
    </div>

    <!-- Input untuk mengatur target -->

    <!-- Tombol-tombol untuk melakukan klik dan reset -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// Inisialisasi variabel target dan counter
const target = ref(33);
const counter = ref(0);

// Fungsi untuk melakukan klik pada dzikir
const clickDzikir = () => {
  const dzikir = counter.value === target.value;
  dzikir ? (counter.value = 0) : counter.value++;
};

// Fungsi untuk mereset counter menjadi 0
const reset = () => {
  counter.value = 0;
};
</script>

<style></style>
