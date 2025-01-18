<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- Header Section -->
    <div
      class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg p-6 mb-8 text-white shadow-lg"
    >
      <h1 class="text-2xl font-bold mb-2">Jadwal Imsakiyah</h1>
      <p v-if="imsakiyahStore.hasJadwalData" class="text-white/90">
        {{ selectedKabkota }} ({{ imsakiyahStore.hijriah }} H /
        {{ imsakiyahStore.masehi }} M)
      </p>
    </div>

    <!-- Loading Overlay -->
    <div
      v-if="imsakiyahStore.isLoading"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-4"
      >
        <div
          class="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent"
        ></div>
        <span class="text-gray-700 text-lg">Memuat data...</span>
      </div>
    </div>

    <!-- Error Message -->
    <div
      v-if="imsakiyahStore.errorMessage"
      class="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded"
    >
      <p class="text-red-700">{{ imsakiyahStore.errorMessage }}</p>
    </div>

    <!-- Selection Form -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <!-- Provinsi Selection -->
      <div class="bg-white rounded-lg shadow p-6">
        <label
          for="provinsi"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Pilih Provinsi
        </label>
        <select
          id="provinsi"
          v-model="selectedProvinsi"
          @change="onProvinsiChange"
          :disabled="imsakiyahStore.isLoading"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Pilih Provinsi</option>
          <option
            v-for="provinsi in imsakiyahStore.provinsiList"
            :key="provinsi"
            :value="provinsi"
          >
            {{ provinsi }}
          </option>
        </select>
      </div>

      <!-- Kabkota Selection -->
      <div class="bg-white rounded-lg shadow p-6">
        <label
          for="kabkota"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Pilih Kota/Kabupaten
        </label>
        <select
          id="kabkota"
          v-model="selectedKabkota"
          @change="onKabkotaChange"
          :disabled="!selectedProvinsi || imsakiyahStore.isLoading"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Pilih Kota/Kabupaten</option>
          <option
            v-for="kabkota in imsakiyahStore.kabkotaList"
            :key="kabkota"
            :value="kabkota"
          >
            {{ kabkota }}
          </option>
        </select>
      </div>
    </div>

    <!-- Today's Schedule -->
    <div v-if="imsakiyahStore.todaySchedule" class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Jadwal Hari Ini</h2>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="bg-indigo-50 px-6 py-4">
          <p class="text-lg font-medium text-indigo-800">
            Tanggal {{ imsakiyahStore.todaySchedule.tanggal }}
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
          <div
            v-for="(time, name) in mainPrayerTimes"
            :key="name"
            class="bg-gray-50 rounded-lg p-4 text-center"
          >
            <p class="text-gray-600 text-sm mb-1">{{ name }}</p>
            <p class="text-lg font-semibold">{{ time }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Schedule -->
    <div v-if="imsakiyahStore.hasJadwalData">
      <h2 class="text-xl font-semibold mb-4">Jadwal Lengkap</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="jadwal in imsakiyahStore.sortedJadwal"
          :key="jadwal.tanggal"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div class="bg-indigo-50 px-4 py-3">
            <p class="font-medium text-indigo-800">
              Tanggal {{ jadwal.tanggal }}
            </p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3">
              <div v-for="(time, name) in getPrayerTimes(jadwal)" :key="name">
                <p class="text-sm text-gray-600">{{ name }}</p>
                <p class="font-medium">{{ time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImsakiyahStore } from "~/store/imsyak";

const imsakiyahStore = useImsakiyahStore();
const selectedProvinsi = ref("");
const selectedKabkota = ref("");

onMounted(() => {
  imsakiyahStore.fetchProvinsi();
});

const mainPrayerTimes = computed(() => {
  if (!imsakiyahStore.todaySchedule) return {};
  return {
    Imsak: imsakiyahStore.todaySchedule.imsak,
    Subuh: imsakiyahStore.todaySchedule.subuh,
    Maghrib: imsakiyahStore.todaySchedule.maghrib,
    Isya: imsakiyahStore.todaySchedule.isya,
  };
});

const getPrayerTimes = (jadwal: any) => {
  return {
    Imsak: jadwal.imsak,
    Subuh: jadwal.subuh,
    Terbit: jadwal.terbit,
    Dhuha: jadwal.dhuha,
    Dzuhur: jadwal.dzuhur,
    Ashar: jadwal.ashar,
    Maghrib: jadwal.maghrib,
    Isya: jadwal.isya,
  };
};

const onProvinsiChange = async () => {
  if (selectedProvinsi.value) {
    selectedKabkota.value = "";
    imsakiyahStore.clearJadwal();
    await imsakiyahStore.fetchKabkota(selectedProvinsi.value);
  }
};

const onKabkotaChange = async () => {
  if (selectedProvinsi.value && selectedKabkota.value) {
    await imsakiyahStore.fetchJadwalImsakiyah(
      selectedProvinsi.value,
      selectedKabkota.value
    );
  }
};
</script>
