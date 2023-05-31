<script setup lang="ts">
  const slug = useRouteParams('slug') as Ref<string>

  const post = await useWP().post(slug.value)
</script>

<template>
  <Layout>
    <div class="prose p-6 space-y-6">
      <h1 class="text-5xl font-black">{{ post.title }}</h1>

      <div v-html="post.content" class="space-y-12" />
    </div>
  </Layout>
</template>
