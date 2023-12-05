<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
        <div v-for="surah in getSurahs" :key="surah.number"
            class="relative grid grid-cols-3 shadow my-4 mx-2 w-full lg:w-[400px] p-0">
            <div class="flex items-center justify-center rounded p-1 text-center">
                <span class="font-bold">{{ surah.number }}</span>
          <img
            alt=""
            class="w-20 h-20"
            src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-decorative-round-ornament-with-pattern-circle-frame-png-image_6940647.png"
          />
            </div>
            <div class="mx-2">
                <nuxt-link :to="{ path: '/alquran/surah', query: { number: surah.number } }">
                    <h5>{{ surah.name }}</h5>
                </nuxt-link>
                <h5>{{ surah.translation }}</h5>
                <small>{{ surah.revelation }} | {{ surah.numberOfAyahs }} ayat</small>
            </div>
            <div class="text-right p-2 my-auto">
                <h1 class="text-xl">{{ surah.asma }}</h1>
                <audio ref="audio" controls class="w-full">
                    <source :src="surah.audio" type="audio/mp3" />
                </audio>
                <!-- <button @click="playAudio" type="button">Play Audio</button> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useSurahStore } from "../../../store/alquran";

const store = useSurahStore();

const getSurahs = computed(() => {
    return store.getSurahs;
});

onMounted(async () => {
    await store.fetchSurahs();
});
</script>
