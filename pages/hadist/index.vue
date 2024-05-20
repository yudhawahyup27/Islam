<template>
  <div>
    <h1>Hadith Collections</h1>
    <ul>
      <li v-for="collection in collections" :key="collection.slug">
        <router-link
          :to="{ name: 'hadits', params: { slug: collection.slug } }"
          >{{ collection.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async fetch() {
    await this.fetchCollections();
  },
  data() {
    return {
      collections: [],
    };
  },
  methods: {
    async fetchCollections() {
      const response = await axios.get(
        "https://hadis-api-id.vercel.app/hadith"
      );
      this.collections = response.data;
    },
  },
};
</script>
