<template>
  <div class="">
    <nav class="shadow w-full px-5 md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-black md:text-2xl hover:text-green-700"
          ><img src="@/assets/img/logo.png" class="h-20" alt="" srcset="" />
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-black">
          <nuxt-link
            class="hover:text-white hover:bg-green-700 p-2 rounded-full"
            to="/"
            >Home</nuxt-link
          >
        </li>
        <li class="text-black">
          <nuxt-link
            class="hover:text-white hover:bg-green-700 p-2 rounded-full"
            to="/alquran"
            >Al-quran</nuxt-link
          >
        </li>
        <li class="text-black">
          <nuxt-link
            class="hover:text-white hover:bg-green-700 p-2 rounded-full"
            to="/Doa"
            >Doa</nuxt-link
          >
        </li>

        <li class="text-black">
          <nuxt-link
            class="hover:text-white hover:bg-green-700 p-2 rounded-full"
            to="/hadist"
            >hadist</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
