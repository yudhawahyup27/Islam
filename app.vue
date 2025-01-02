<template>
  <template>
    <div>
      <NuxtLayout>
        <navbar />
        <div class="container">
          <NuxtPage />
        </div>
      </NuxtLayout>
    </div>
  </template>
</template>

<script>
import navbar from "@/components/navigation/navbar";

export default {
  components: {
    navbar,
  },
};
</script>
