<template>
  <div v-if="surah" class="mx-4">
    <PartialsBanner
      bannerImage="https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-holy-alquran-background-design-image_590800.jpg"
      title="Al Quran"
      arabicText="عَنْ أَبي أُمَامَةَ الْبَاهِلِىُّ رضى الله عنه قَالَ سَمِعْتُ رَسُولَ اللَّهِ -صلى الله عليه وسلم- يَقُولُ اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِى يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ"
      translation="“Aisyah radhiyallahu ‘anha meriwayatkan bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: “Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala” (HR. Muslim)."
    />
    <h1 class="text-center text-green-700 font-bold my-2">
      {{ surah.asma.ar.long }}
    </h1>

    <div class="my-6" v-for="ayah in surah.ayahs" :key="ayah.number.inquran">
      <div class="flex justify-between flex-col-reverse flex-wrap gap-2">
        <h1 class="text-right text-wrap text-md mx-4">{{ ayah.text.ar }}</h1>
        <div class="number">
          <span>{{ ayah.number.insurah }}</span>
        </div>
      </div>
      <p class="mx-6 text-justify my-2">{{ ayah.translation.id }}</p>
      <div class="mx-6">
        <ul class="flex gap-2">
          <!-- Audio -->
          <li >
            <button class="flex flex-cols gap-2" @click="togglePlayPause(ayah.number.inquran, ayah.audio.url)">
             <img width="20" src="/assets/img/play.svg" alt="">  {{ buttonText(ayah.number.inquran) }}
            </button>
          </li>
          <!-- Tombol Salin -->
          <li>
            <button class="flex gap-2" @click="copyText(ayah.text.ar, ayah.translation.id)">
              <img width="20" src="/assets/img/copy.svg" alt="">   Salin
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const surah = ref(null);
const playingAyah = ref(null); // ID ayat yang sedang diputar
const audioElement = ref(null); // Elemen audio

async function fetchSurah() {
  const res = await fetch(
    `https://quran-endpoint.vercel.app/quran/${route.params.nomor}`
  );
  const data = await res.json();
  surah.value = data.data;
}

fetchSurah();

function togglePlayPause(ayahId, audioUrl) {
  if (playingAyah.value === ayahId) {
    audioElement.value.pause();
    playingAyah.value = null;
  } else {
    if (audioElement.value) {
      audioElement.value.pause();
    }
    audioElement.value = new Audio(audioUrl);
    audioElement.value.play();
    playingAyah.value = ayahId;
    audioElement.value.onended = () => {
      playingAyah.value = null;
    };
  }
}

function buttonText(ayahId) {
  return playingAyah.value === ayahId ?  "Pause" : "Play";
}

// Fungsi untuk menyalin teks
async function copyText(arabicText, translationText) {
  const combinedText = `${arabicText}\n${translationText}`;

  try {
    await navigator.clipboard.writeText(combinedText);
    alert("Teks telah disalin!");
  } catch (error) {
    alert("Tidak dapat menyalin teks. Mohon coba lagi.");
  }
}
</script>

<style>
/* Gaya CSS */
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
