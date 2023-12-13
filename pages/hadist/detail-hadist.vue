<template>
    <div>
        <h1>Hadiths by {{ name }}</h1>
        <ul>
            <li v-for="hadith in items" :key="hadith.id">{{ hadith.name }}</li>
        </ul>
        <nav>
            <button @click="fetchPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="fetchPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
        </nav>
    </div>
</template>

<script>
export default {
    async fetch({ params }) {
        await this.fetchPage(params.slug, 1);
    },
    data() {
        return {
            name: '',
            items: [],
            currentPage: 1,
            totalPages: 1
        };
    },
    methods: {
        async fetchPage(slug, page) {
            const response = await this.$axios.get(`https://hadis-api-id.vercel.app/hadith/${slug}?page=${page}&limit=20`);
            this.name = response.data.name;
            this.items = response.data.items;
            this.currentPage = response.data.pagination.currentPage;
            this.totalPages = response.data.pagination.totalPages;
        }
    }
};
</script>
