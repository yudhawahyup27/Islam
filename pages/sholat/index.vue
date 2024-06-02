<template>
  <div class="p-4">
    <div class="grid grid-cols-2">
      <input
        v-model="kota"
        @keyup.enter="searchKota"
        placeholder="Masukkan nama kota"
        class="border p-2 rounded w-f"
      />
      <button
        @click="searchKota"
        class="bg-green-700 text-white p-2 rounded ml-2"
      >
        Cari Kota
      </button>
    </div>

    <!-- Daftar kota yang ditemukan -->
    <div v-if="kotaList.length">
      <h3 class="text-xl mt-4">Pilih Kota:</h3>
      <ul>
        <li
          v-for="city in kotaList"
          :key="city.id"
          @click="selectKota(city)"
          class="cursor-pointer hover:bg-gray-200 p-2 rounded"
        >
          {{ city.lokasi }}
        </li>
      </ul>
    </div>
    <div v-if="jadwal">
      <h3 class="text-xl mt-4">Jadwal Sholat : {{ jadwal.lokasi }}, {{jadwal.daerah}}</h3>
      <table class="w-full mt-4 border border-gray-300">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2">Waktu Sholat</th>
            <th class="border border-gray-300 px-4 py-2">Jam</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, prayer) in jadwal.jadwal" :key="prayer">
            <td class="border border-gray-300 px-4 py-2 capitalize">
              {{ prayer }}
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { useSholatStore } from "~/store/sholat";
import { computed, ref, onMounted } from "vue";

export default {
  setup() {
    const sholatStore = useSholatStore();
    const kota = ref("kediri");

    const kotaList = computed(() => sholatStore.kotaList);
    const jadwal = computed(() => sholatStore.jadwal);

    const searchKota = async () => {
      await sholatStore.fetchKota(kota.value);
    };

    const selectKota = async (city) => {
      const date = new Date().toISOString().split("T")[0];
      await sholatStore.fetchJadwal(city.id, date);
    };

    onMounted(async () => {
      // Fetch default city data for Kediri
      await sholatStore.fetchKota("kediri");
      if (sholatStore.kotaList.length > 0) {
        const kediri = sholatStore.kotaList[0];
        await selectKota(kediri);
      }
    });

    return {
      kota,
      kotaList,
      jadwal,
      searchKota,
      selectKota,
    };
  },
};
</script>

<style scoped>
tr:nth-child(even) {
  background: green;
  color: white;
}
</style>
