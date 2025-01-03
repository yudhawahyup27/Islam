<template>
  <div
    class="flex flex-wrap justify-between p-4 rounded-md border-2 border-green-700"
    @click="goToSurah(juz.number)"
  >
    <nuxt-link
      :to="{ name: 'alquran-surah-nomor', params: { nomor: juz.number } }"
      class="w-full"
    >
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-wrap gap-4">
          <div
            class="relative w-10 h-10 bg-green-700 rounded-md rotate-45 flex items-center justify-center"
          >
            <span class="counter-rotate -rotate-45 text-white">
              {{ juz.name }}
            </span>
          </div>
          <div class="flex flex-col">
            <div>
              <span>{{ juz.name_start_id }} | {{ juz.name_end_id }} </span>
            </div>
            <div>
              <small>
                Surah {{ juz.surah_id_start }} | {{ juz.surah_id_end }}
              </small>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-right">
            <span> {{ juz.name }} </span>
          </div>
          <div>
            <small>{{ juz.verse_start }} | {{ juz.verse_end }}</small>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  juz: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        "number",
        "name",
        "name_start_id",
        "name_end_id",
        "surah_id_start",
        "surah_id_end",
        "verse_start",
        "verse_end",
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
