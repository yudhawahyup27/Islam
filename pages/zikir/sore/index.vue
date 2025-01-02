<template>
    <div class="mx-5">
      <div class="flex justify-center gap-2 my-4">
        <nuxt-link
          class="bg-green-700 text-center p-2 w-20 text-white rounded-md"
          to="/zikir"
        >
          Dzikir Pagi
        </nuxt-link>
        <nuxt-link
          class="bg-green-700 w-20 text-center p-2 text-white rounded-md"
          to="/zikir/sore"
        >
          Dzikir Sore
        </nuxt-link>
        <!-- <nuxt-link
          class="bg-green-700 w-20 text-center p-2 text-white rounded-md"
          to="/zikir/sholat"
        >
          Dzikir sholat
        </nuxt-link> -->
      </div>
      <h2
        class="text-green-700 border-green-700 border w-28 px-2 font-bold rounded-lg"
      >
        Dzikir 1x:
      </h2>
      <div class="loading" v-if="Loading">
        <Loading />
      </div>
      <div
        v-else
        v-for="item in dzikir1x"
        :key="item.arab"
        class="bg-green-700 text-white p-4 w-22 mx-4 my-4 rounded-lg"
      >
        <span
          class="float-start text-green-700 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center text-xs"
        >
          {{ item.type }}
        </span>
        <span class="text-right md:line-clamp-4 line-clamp-4 mb-2">
          {{ item.arab }}
        </span>
        <span>
          {{ item.indo }}
        </span>
      </div>
  
      <h2
        class="text-green-700 border-green-700 border w-28 px-2 font-bold rounded-lg"
      >
        Dzikir 3x:
      </h2>
      <div class="loading" v-if="Loading">
        <Loading />
      </div>
      <div
        v-else
        v-for="item in dzikir3x"
        :key="item.arab"
        class="bg-green-700 text-white p-4 w-22 mx-4 my-4 rounded-lg"
      >
        <span
          class="float-start text-green-700 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center text-xs"
        >
          {{ item.type }}
        </span>
        <span class="text-right md:line-clamp-4 line-clamp-4 mb-2">
          {{ item.arab }}
        </span>
        <span>
          {{ item.indo }}
        </span>
      </div>
  
      <h2
        class="text-green-700 border-green-700 border w-32 px-2 font-bold rounded-lg"
      >
        Dzikir 10x:
      </h2>
      <div class="loading" v-if="Loading">
        <Loading />
      </div>
      <div
        v-else
        v-for="item in dzikir10x"
        :key="item.arab"
        class="bg-green-700 text-white p-4 w-22 mx-4 my-4 rounded-lg"
      >
        <span
          class="float-start text-green-700 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center text-xs"
        >
          {{ item.type }}
        </span>
        <span class="text-right md:line-clamp-4 line-clamp-4 mb-2">
          {{ item.arab }}
        </span>
        <span>
          {{ item.indo }}
        </span>
      </div>
  
      <h2
        class="text-green-700 border-green-700 border w-36 px-2 font-bold rounded-lg"
      >
        Dzikir 100x:
      </h2>
      <div class="loading" v-if="Loading">
        <Loading />
      </div>
      <div
        v-else
        v-for="item in dzikir100x"
        :key="item.arab"
        class="bg-green-700 text-white p-4 w-22 mx-4 my-4 rounded-lg"
      >
        <span
          class="float-start text-green-700 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center text-xs"
        >
          {{ item.type }}
        </span>
        <span class="text-right md:line-clamp-4 line-clamp-4 mb-2">
          {{ item.arab }}
        </span>
        <span>
          {{ item.indo }}
        </span>
      </div>
  
      <!-- Sisipkan bagian untuk dzikir dengan pengulangan 10x dan 100x jika perlu -->
    </div>
  </template>
  
  <script>
  import Loading from "~/components/partials/loading.vue";
  
  export default {
    components: {
      Loading,
    },
    data() {
      return {
        dzikirData: [],
        Loading: true,
      };
    },
    computed: {
      dzikir1x() {
        return this.dzikirData.filter((item) => item.ulang === "1x");
      },
      dzikir3x() {
        return this.dzikirData.filter((item) => item.ulang === "3x");
      },
  
      dzikir10x() {
        return this.dzikirData.filter((item) => item.ulang === "10x");
      },
      dzikir100x() {
        return this.dzikirData.filter((item) => item.ulang === "100x");
      },
    },
    mounted() {
      this.fetchDzikirData();
    },
    methods: {
      fetchDzikirData() {
        fetch("https://api.dikiotang.com/dzikir/sore")
          .then((response) => response.json())
          .then((data) => {
            this.dzikirData = data.data;
            this.Loading = false;
          })
          .catch((error) => console.error("Terjadi kesalahan:", error));
      },
    },
  };
  </script>
  
  <style scoped>
  .nuxt-link-active,
  .router-link-active,
  .router-link-exact-active {
    color: rgb(21, 128, 61);
    text-decoration: none;
    font-weight: bold;
    background-color: aliceblue;
  }
  </style>
  