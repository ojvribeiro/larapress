<script setup lang="ts">
  const page = await useWP().page('sample-page')
</script>

<template>
  <Layout>
    <div class="prose p-6 space-y-6">
      <h1 class="text-5xl font-black">{{ page.title }}</h1>

      <div v-html="page.content" class="space-y-12" />
    </div>
  </Layout>
</template>
