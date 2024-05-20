<template>
  <div class="mx-2">
    <PartialsAlquranBanner class="my-2" />
    <!-- Card -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div
        v-for="surat in surats"
        :key="surat.nomor"
        class="flex flex-wrap justify-between p-4 rounded-md border-2 border-green-700"
      > 
        <nuxt-link
          :to="{ path: 'surah/', query: { nomor: surat.nomor } }"
          class="w-full"
        >
          <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-4">
              <div
                class="relative w-10 h-10 bg-green-700 rounded-md rotate-45 flex items-center justify-center"
              >
                <span class="counter-rotate -rotate-45 text-white">{{
                  surat.nomor
                }}</span>
              </div>
              <div class="flex flex-col">
                <div>
                  <span>{{ surat.nama_latin }}</span>
                </div>
                <div>
                  <small>{{ surat.arti }}</small>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <span class="text-left">{{ surat.nama }}</span>
              </div>
              <div>
                <small
                  >{{ surat.jumlah_ayat }} | {{ surat.tempat_turun }}</small
                >
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
