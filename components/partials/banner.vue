<template>
  <div
    class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
  >
    <img
      :src="bannerImage"
      alt="Banner"
      class="absolute inset-0 w-full h-full object-cover rounded-lg"
    />
    <div
      class="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6"
    >
      <h1 class="text-white text-xl">{{ title }}</h1>
      <h4>{{ arabicText }}</h4>
      <span class="text-white text-sm">{{ translation }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bannerImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    arabicText: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-image: url("/assets/img/alquran-banner.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50%;
}
</style>
