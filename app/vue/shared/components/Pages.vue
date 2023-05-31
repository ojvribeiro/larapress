<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component, route }">
      <KeepAlive>
        <component :is="Component" :key="route.fullPath" />
      </KeepAlive>
    </RouterView>
  </Suspense>
</template>
