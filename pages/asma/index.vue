<template>
  <div>
    <div class="relative overflow-x-auto mx-4 my-3 shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-white dark:text-white"
      >
        <thead
          class="text-xs text-white uppercase bg-green-700 dark:bg-green-700 dark:text-white"
        >
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Asmaul Husna</th>
            <th scope="col" class="px-6 py-3">Arab</th>
            <th scope="col" class="px-6 py-3">Terjemah</th>
          </tr>
        </thead>
        <tbody v-for="asma in asmas" :key="asma.id">
          <tr
            class="odd:bg-white odd:dark:bg-green-900 even:bg-green-50 even:dark:bg-green-800 border-b dark:border-green-700"
          >
            <td class="px-6 py-4">{{ asma.id }}</td>
            <td class="px-6 py-4">{{ asma.latin }}</td>
            <td class="px-6 py-4">{{ asma.arab }}</td>
            <td class="px-6 py-4">{{ asma.indo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useAsmaStore } from "~/store/asma";

export default {
  data() {
    return {
      asmas: [],
    };
  },
  async mounted() {
    const asmaStore = useAsmaStore();
    await asmaStore.fetchAsma();
    this.asmas = asmaStore.getAsma;
  },
};
</script>

<style>
tr:nth-child(even) {
  background: red;
}
</style>
