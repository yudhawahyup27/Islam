<template>
    <div v-if="surah" class="relative ">
        <div class="mt-4 relative bg-[#dff0d8] mx-4 p-5 shadow-md rounded-lg block">
            <h1 class="text-2xl font-bold text-center  text-gray-700">Surah {{ surah.name }}</h1>
            <h2 class="text-center">({{ surah.translation }})</h2>
            <h6 class="text-center">{{ surah.revelation }} | {{ surah.numberOfAyahs }} Ayat</h6>
            <span>Deskripsi</span>
            <p class="text-gray-500 text-justify desk p-5">{{ surah.description }}</p>
            <audio ref="audio" controls class="w-full">
                <source :src="surah.audio" type="audio/mp3" />
            </audio>
        </div>
        <div class="text-center my-4">
            <h3>{{ surah.bismillah.arab }}</h3>
        </div>


        <div v-for=" ayah  in  surah.ayahs " :key="ayah.number.inQuran"
            class="mt-4 relative mx-4 p-5 shadow-md rounded-lg block">
            <div class="float-right">
                <img :src="ayah.image.primary" alt="Ayah Image" class="   w-200 md:w-25   ">
            </div>
            <div class="w-full ">

                <div class="">
                    <p class="text-xs text-justify ">{{ ayah.translation }}</p>
                    <button @click="toggleTafsir"
                        class="bg-white py-1 px-2  my-2 rounded-lg border border-gray-200 hover:border-gray-300 text-purple-900 shadow-md font-medium transition-colors">
                        {{ bukatafsir ? 'tutup tafsir' : "buka tafsir" }}
                    </button>
                </div>


            </div>
            <!-- tafsir -->
            <div class="flex flex-wrap" v-show="bukatafsir">
                <div class="w-full">
                    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(1)"
                                v-bind:class="{ 'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1 }">
                                Tafsir Kemenag Pendek
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(2)"
                                v-bind:class="{ 'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2 }">
                                Tafsir Kemenag Panjang
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(3)"
                                v-bind:class="{ 'text-pink-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3 }">

                                quraish
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(4)"
                                v-bind:class="{ 'text-pink-600 bg-white': openTab !== 4, 'text-white bg-pink-600': openTab === 4 }">
                                jalalayn
                            </a>
                        </li>
                    </ul>
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                    <p>
                                        {{ ayah.tafsir.kemenag.short }}
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                    <p class="text-sm desk  text-justify ">
                                        {{ ayah.tafsir.kemenag.long }}
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                                    <p>
                                        {{ ayah.tafsir.quraish }}
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                                    <p>
                                        {{ ayah.tafsir.jalalayn }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            surah: null,
            loading: true,
            bukatafsir: false,
            error: null,
            openTab: 1
        };
    },
    methods: {
        toggleTafsir() {
            this.bukatafsir = !this.bukatafsir;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        async fetchSurah() {
            this.loading = true;
            try {
                const response = await axios.get(`https://quran-api-id.vercel.app/surahs/${this.$route.query.number}`);
                if (response.status === 200) {
                    this.surah = response.data;
                }
            } catch (error) {
                console.error(error);
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        // Fetch the surah when the component is mounted
        this.fetchSurah();
    },
};
</script>

<style>
.desk {
    margin-bottom: 10px;
    line-height: 1.5;
}
</style>
