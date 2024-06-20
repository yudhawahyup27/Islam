<template>
  <div class="mx-4">
    <form action="">
      <div class="flex flex-col gap-2">
        <label for="zakat-type">
          Jenis Zakat <small class="text-red-500">*</small>
        </label>
        <select
          class="p-2 rounded-md border-green-700 border-2 focus:ring-green-700 bg-white"
          name="zakat"
          id="zakat-type"
        >
          <option selected>Pilih Jenis Zakat</option>
          <option value="zakat-mal">Zakat Mal</option>
          <option value="zakat-perdagangan">Zakat Perdagangan</option>
          <option value="zakat-Pertanian-tanaman-pangan">
            Zakat Pertanian Tanaman pangan
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="zakat-amount">
          Jumlah Zakat <small class="text-red-500">*</small>
        </label>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-green-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>
          <input
            type="number"
            v-model="totalZakat"
            id="currency-input"
            class="block p-2.5 w-full z-20 ps-10 text-sm rounded-lg border-green-700 border-2 focus:ring-green-700"
            placeholder="Enter amount"
            required
          />
        </div>
        <small
          >Belum tau nominal zakat mu ? Buka
          <nuxt-link class="text-green-700 font-semibold right-0" to=""
            >Kalkulator Zakat</nuxt-link
          ></small
        >
        <div class="flex flex-col gap-2">
          <label for="zakat-name">
            Atas Nama <small class="text-red-500">*</small>
          </label>
          <input
            type="text"
            v-model="zakatName"
            class="focus:ring-green-700 p-2 rounded-lg border-2 border-green-700"
            placeholder="Tulis Nama Anda"
          />
          <div class="flex items-center mt-2">
            <input
              type="checkbox"
              id="anonymous-checkbox"
              v-model="isAnonymous"
              @change="setAnonymous"
            />
            <label for="anonymous-checkbox" class="ml-2"
              >Isi dengan Anonymous</label
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BayarZakat",
  data() {
    return {
      zakatName: "",
      isAnonymous: false,
    };
  },
  methods: {
    setTotalZakat(totalZakat) {
      this.totalZakat = totalZakat;
    },
    setAnonymous() {
      if (this.isAnonymous) {
        this.zakatName = "anonymous";
      } else {
        this.zakatName = "";
      }
    },
  },
};
</script>
