<template>
  <div v-if="surah" class="container mx-auto">
    <div class="fixed bg-green-700 rounded-md bottom-0 w-100">
      <div class="flex justify-center">
        <div class="p-2">
          <nuxt-link
            class="text-white"
            :to="'/alquran/surah/' + (surah.number - 1)"
            :class="{ hidden: surah.number === 1 }"
          >
            <small>sebelum</small> |
            <small>Previous Surah</small>
          </nuxt-link>
        </div>
        <div class="p-2">
          <nuxt-link
            class="text-white"
            :to="'/alquran/surah/' + (surah.number + 1)"
            :class="{ hidden: surah.number === 114 }"
          >
            <small>Sesudah</small> |
            <small>Next Surah</small>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex gap-2 container">
      <PartialsAlquranSideBar class="" />
      <div class="basis-full">
        <PartialsBanner
          bannerImage="https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-holy-alquran-background-design-image_590800.jpg"
          title="Al Quran"
          arabicText="عَنْ أَبي أُمَامَةَ الْبَاهِلِىُّ رضى الله عنه قَالَ سَمِعْتُ رَسُولَ اللَّهِ -صلى الله عليه وسلم- يَقُولُ اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِى يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ"
          translation="“Aisyah radhiyallahu ‘anha meriwayatkan bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: “Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala” (HR. Muslim)."
        />
        <div
          class="card bg-green-700 p-4 gap-4 my-4 text-white flex justify-between rounded-md"
        >
          <div>
            <h1 class="text-white font-bold">
              {{ surah.asma.id.short }} - {{ surah.asma.ar.short }}
            </h1>
            <span>Ayah :{{ surah.ayahCount }}</span>
          </div>

          <div>
            <h2>{{ surah.type.id }}</h2>
            <button
              @click="fullaudio"
              class="button bg-white text-green-700 px-2 py-1 rounded-md flex"
            >
              <div v-if="isPlaying">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/24/pause.png"
                  alt="pause"
                />
              </div>
              <div v-else>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/24/play--v1.png"
                  alt="play--v1 mr-2"
                />
              </div>
              Full Surah
            </button>
          </div>
        </div>
        <div
          class="my-6"
          v-for="ayah in surah.ayahs"
          :key="ayah.number.inquran"
          :ref="(el) => (ayahRefs[ayah.number.inquran] = el)"
        >
          <div class="flex justify-between flex-col-reverse flex-wrap gap-2">
            <h1 :class="ArabsizeText" class="text-right text-wrap text-md mx-4">
              {{ ayah.text.ar }}
            </h1>
            <div class="number">
              <span>{{ ayah.number.insurah }}</span>
            </div>
          </div>
          <p class="mx-6 text-justify my-2">{{ ayah.translation.id }}</p>
          <div class="mx-6">
            <ul class="flex gap-2">
              <!-- Audio -->
              <li>
                <button
                  class="flex flex-cols gap-2"
                  @click="togglePlayPause(ayah.number.inquran, ayah.audio.url)"
                >
                  <img width="20" src="/assets/img/play.svg" alt="" />
                  {{ buttonText(ayah.number.inquran) }}
                </button>
              </li>
              <!-- Tombol Salin -->
              <li>
                <button
                  class="flex gap-2"
                  @click="copyText(ayah.text.ar, ayah.translation.id)"
                >
                  <img width="20" src="/assets/img/copy.svg" alt="" />
                  Salin
                </button>
              </li>
              <li>
                <div class="flex gap-2">
                  <button @click="kecilSize">A-</button> |
                  <button @click="besarSize">A+</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const isPlaying = ref(false);
const route = useRoute();
const surah = ref(null);
const ayahRefs = {}; // Objek untuk menyimpan referensi ayat

const sizeIndexText = ref(2);
const sizeText = [
  "text-sm",
  "text-base",
  "text-md",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
  "text-8xl",
  "text-9xl",
];

const Menu = () => {
  alert("Masih Dalam Pengerjaan");
};

const ArabsizeText = computed(() => sizeText[sizeIndexText.value]);
const playingAyah = ref(null); // ID ayat yang sedang diputar
const audioElement = ref(null); // Elemen audio

function kecilSize() {
  if (sizeIndexText.value > 0) {
    sizeIndexText.value--;
  }
}

function besarSize() {
  if (sizeIndexText.value < sizeText.length - 1) {
    sizeIndexText.value += 1;
  }
}

async function fetchSurah() {
  const res = await fetch(
    `https://quran-endpoint.vercel.app/quran/${route.params.nomor}`
  );
  const data = await res.json();
  surah.value = data.data;
}

function fullaudio() {
  if (isPlaying.value) {
    // Jika audio sedang dimainkan, hentikan audio
    audioElement.value.pause();
    audioElement.value.currentTime = 0; // Reset ke awal
    isPlaying.value = false;
  } else {
    // Jika audio tidak dimainkan, mulai audio baru
    if (audioElement.value) {
      audioElement.value.pause(); // Pastikan audio lain berhenti
    }

    // Inisialisasi audio baru
    audioElement.value = new Audio(surah.value.recitation.full);

    // Mulai memutar audio
    audioElement.value.play();
    isPlaying.value = true;

    // Event listener ketika audio selesai
    audioElement.value.onended = () => {
      isPlaying.value = false; // Ubah status menjadi tidak diputar
    };

    // Tangani error pada pemutaran audio
    audioElement.value.onerror = (error) => {
      console.error("Error playing audio:", error);
      alert("Gagal memutar audio. Mohon coba lagi.");
      isPlaying.value = false;
    };
  }
}

function togglePlayPause(ayahId) {
  if (playingAyah.value === ayahId) {
    audioElement.value.pause();
    playingAyah.value = null;
  } else {
    if (audioElement.value) {
      audioElement.value.pause();
    }
    playAyah(ayahId);
  }
}

function playAyah(ayahId) {
  const ayah = surah.value.ayahs.find((a) => a.number.inquran === ayahId);
  if (!ayah) return;

  audioElement.value = new Audio(ayah.audio.url);
  audioElement.value.play();
  playingAyah.value = ayahId;
  audioElement.value.onended = () => {
    console.log("Playing Stop");
    const nextAyah = getNextAyah(ayahId);
    if (nextAyah) {
      playAyah(nextAyah.number.inquran);
    } else {
      playingAyah.value = null;
    }
  };

  // Scroll to the ayah card
  const ayahElement = ayahRefs[ayahId];
  if (ayahElement) {
    ayahElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function getNextAyah(ayahId) {
  const currentIndex = surah.value.ayahs.findIndex(
    (a) => a.number.inquran === ayahId
  );
  if (currentIndex >= 0 && currentIndex < surah.value.ayahs.length - 1) {
    return surah.value.ayahs[currentIndex + 1];
  }
  return null;
}

function buttonText(ayahId) {
  return playingAyah.value === ayahId ? "Pause" : "Play";
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

fetchSurah();
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
