<template>
  <template>
    <div>
      <NuxtLayout>
        <navbar />
      
          <NuxtPage />
     
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
