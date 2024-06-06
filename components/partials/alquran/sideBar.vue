<template>
  <aside
    class="hidden flex-col h-auto p-4 bg-green-700 text-white border rounded-md w-80"
  >
    <div class="flex justify-between">
      <div
        class="flex items-center justify-center w-16 px-2 rounded-md bg-gray-900"
      >
        <nuxt-link to="/" class="font-semibold text-white">Surah</nuxt-link>
      </div>
      <div
        class="flex items-center justify-center w-16 px-2 rounded-md bg-gray-900"
      >
        <nuxt-link to="/" class="font-semibold text-white">Juz</nuxt-link>
      </div>
      <div
        class="flex items-center justify-center w-16 px-2 rounded-md bg-gray-900"
      >
        <nuxt-link to="/" class="font-semibold text-white">Surah</nuxt-link>
      </div>
    </div>
    <nav class="flex flex-col px-4 py-2">
      <div>
        <ul>
          <li v-if="surat" class="mb-2">
            <nuxt-link
              :to="{
                name: 'alquran-surah-nomor',
                params: { nomor: surat.number },
              }"
              class="block py-2.5 px-4 rounded text-white transition duration-200 hover:bg-gray-700"
            >
              {{ surat.name_id }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  suratList: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((surat) =>
        [
          "number",
          "name_id",
          "translation_id",
          "name_short",
          "number_of_verses",
          "revelation_id",
        ].every((key) => key in surat)
      );
    },
  },
});
</script>

<style scoped></style>
