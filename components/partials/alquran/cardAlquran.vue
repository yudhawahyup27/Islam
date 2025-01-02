<template>
  <div
    class="flex flex-wrap justify-between p-4 rounded-md border-2 border-green-700"
    @click="goToSurah(surat.number)"
  >
    <nuxt-link
      :to="{ name: 'alquran-surah-nomor', params: { nomor: surat.nomor } }"
      class="w-full"
    >
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-wrap gap-4">
          <div
            class="relative w-10 h-10 bg-green-700 rounded-md rotate-45 flex items-center justify-center"
          >
            <span class="counter-rotate -rotate-45 text-white">
              {{ surat.nomor }}</span
            >
          </div>
          <div class="flex flex-col">
            <div>
              <span>Surah {{ surat.nama }}</span>
            </div>
            <div>
              <small>{{ surat.arti }}</small>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-right">
            <span class="">{{ surat.nama_latin }}</span>
          </div>
          <div>
            <small>{{ surat.jumlah_ayat }} | {{ surat.tempat_turun }}</small>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  surat: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        "number",
        "name_id",
        "translation_id",
        "name_short",
        "number_of_verses",
        "revelation_id",
      ].every((key) => key in value);
    },
  },
});

const emits = defineEmits(["selectSurah"]);

const goToSurah = (number) => {
  emits("selectSurah", number);
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
