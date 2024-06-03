<template>
  <aside class="flex flex-col h-auto hidden bg-gray-800 text-white w-64">
    <div class="flex items-center justify-center h-16 bg-gray-900">
      <h1 class="text-2xl font-semibold">My App</h1>
    </div>
    <nav class="flex-1 px-4 py-2">
      <ul>
        <li class="mb-2">
          <nuxt-link
            to="/"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Home
          </nuxt-link>
        </li>
        <li class="mb-2">
          <nuxt-link
            to="/about"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            About
          </nuxt-link>
        </li>
        <li class="mb-2">
          <nuxt-link
            to="/contact"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped></style>
