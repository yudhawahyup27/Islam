<template>
  <div class="mx-2">
    <PartialsAlquranBanner class="my-2" />
    <!-- Card -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div
        v-for="surat in surats"
        :key="surat.number"
        class="flex flex-wrap justify-between p-4 rounded-md border-2 border-green-700"
      >
        <nuxt-link
          :to="{ name: 'alquran-surah-nomor', params: { nomor: surat.number } }"
          class="w-full"
        >
          <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-4">
              <div
                class="relative w-10 h-10 bg-green-700 rounded-md rotate-45 flex items-center justify-center"
              >
                <span class="counter-rotate -rotate-45 text-white">{{
                  surat.number
                }}</span>
              </div>
              <div class="flex flex-col">
                <div>
                  <span>{{ surat.asma.id.long }}</span>
                </div>
                <div>
                  <small>{{ surat.asma.translation.id }}</small>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="text-right">
                <span class="">{{ surat.asma.ar.short }}</span>
              </div>
              <div>
                <small>{{ surat.ayahCount }} | {{ surat.type.id }}</small>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useSuratStore } from "~/store/alquran";

export default {
  data() {
    return {
      surats: [],
    };
  },
  async created() {
    const suratStore = useSuratStore();
    await suratStore.fetchSurats();
    this.surats = suratStore.getSurats;
  },
};
</script>

<style></style>
