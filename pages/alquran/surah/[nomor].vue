<template>
  <div v-if="surah" class="mx-4">
    <h1 class="text-center text-green-700 font-bold my-2">
      {{ surah.asma.ar.long }}
    </h1>
    <!-- <audio id="song" class="block w-full max-w-md mx-auto">
      <source :src="audioSrc" type="audio/mpeg" />
    </audio>
    <button
      class="bg-green-700 px-2 text-white rounded-full fixed right-4 z-1"
      @click="togglePlayPause"
    >
      {{ buttonText }}
    </button> -->

    <div class="text-center my-2">
      <button class="">
        <img width="15" src="/assets/img/i.svg" alt="" />
      </button>
      <span class=""> Info Surah</span>
    </div>
    <!-- Fixed Header -->
    <div class="fixed bg-green-700 left-4 rounded-md top-auto">
      <div class="flex justify-between">
        <div class="px-2">
          <nuxt-link
            class="bg-green-700 rounded-full px-2 text-white"
            :to="'/alquran/surah/' + (surah.number - 1)"
            :class="{ hidden: surah.number === 1 }"
          >
            <small>sebelum</small> |
            <small>Previous Surah</small>
          </nuxt-link>
        </div>

        <div class="">
          <nuxt-link
            class="bg-green-700 text-white rounded-full px-2"
            :to="'/alquran/surah/' + (surah.number + 1)"
            :class="{ hidden: surah.number === 114 }"
          >
            <small>Sesudah</small> |
            <small>Next Surah</small>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="my-6" v-for="ayah in surah.ayahs" :key="ayah.number.inquran">
      <div class="flex justify-between flex-col-reverse flex-wrap gap-2">
        <h1 class="text-right text-wrap text-md mx-4">{{ ayah.text.ar }}</h1>
        <div class="number">
          <span>{{ ayah.number.insurah }}</span>
        </div>
      </div>
      <p class="mx-6 text-justify my-2">{{ ayah.translation.id }}</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const surah = ref(null);
const buttonText = ref("Play");

async function fetchSurah() {
  const res = await fetch(
    `https://quran-endpoint.vercel.app/quran/${route.params.nomor}`
  );
  const data = await res.json();
  surah.value = data.data;
}

fetchSurah();

function togglePlayPause() {
  const audio = document.getElementById("song");
  if (audio.paused) {
    audio.play();
    buttonText.value = "Pause";
  } else {
    audio.pause();
    buttonText.value = "Play";
  }
}
</script>

<style>
/* Add your custom styles here */

.number {
  background-image: url("/assets/img/number.svg");

  margin: 14px 16px 0 0;
  width: 41px;
  height: 48px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
