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
      <p class="text-green-700 text-lg font-semibold mt-4">
        Repetisi: {{ repetitions }}
      </p>
      <div
        :class="{ 'grid-cols-1': counter === 0, 'grid-cols-1': counter !== 0 }"
        class="grid gap-4"
      >
        <button
          :class="{ hidden: counter == 0 }"
          @click.prevent="reset"
          class="text-xs my-4 p-1 bg-green-700 text-white rounded-md"
        >
          Reset
        </button>
        <div >
         
          <input
            id="target"
            type="number"
            class="border-2 rounded-md text-green-700 border-green-500 text-center my-4"
            v-model="target"
            min="0"
          />
        </div>
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
const repetitions = ref(0);

// Fungsi untuk melakukan klik pada dzikir
const clickDzikir = () => {
  if (counter.value === target.value) {
    counter.value = 0;
    repetitions.value += 1;
  } else {
    counter.value += 1;
  }
};
// Fungsi untuk mereset counter menjadi 0
const reset = () => {
  repetitions.value = 0;
  counter.value = 0;
};
</script>

<style></style>
