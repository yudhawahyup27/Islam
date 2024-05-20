<template>
  <div class="mx-2">
    <h1 class="text-center text-green-700 font-bold my-2">Al-Baqarah</h1>
    <!--Header -->

    <audio id="song" class="block w-full max-w-md mx-auto">
      <source
        src="https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/002.mp3"
        type="audio/mpeg"
      />
    </audio>
    <button
      class="bg-green-700 px-2 text-white rounded-full fixed right-4 z-1"
      @click="togglePlayPause"
    >
      {{ buttonText }}
    </button>

    <div class="text-center my-2">
      <button class="">
        <img width="15" src="/assets/img/i.svg" alt="" />
      </button>
      <span class=""> Info Surah</span>
    </div>
    <!-- Fixed Header -->
    <div class="flex justify-between">
      <div class="bg-green-700 text-white rounded-full px-2">
        <nuxt-link class="p-2 text-white" to="">
          <small>sebelum</small> |
          <small>Al imron</small>
        </nuxt-link>
      </div>
      <div class="bg-green-700 text-white rounded-full px-2">
        <nuxt-link class="p-2 text-white" to="">
          <small>Sesudah</small> |
          <small>Al imron</small>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isPlaying: false,
    };
  },

  computed: {
    buttonText() {
      return this.isPlaying ? "Pause" : "Play";
    },
  },
  methods: {
    togglePlayPause() {
      const song = document.getElementById("song");
      if (this.isPlaying) {
        song.pause();
      } else {
        song.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>
