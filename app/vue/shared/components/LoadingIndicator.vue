<template>
  <div class="loading-indicator" v-show="pageLoadingStore.loading" />
</template>

<script setup lang="ts">
  import { usePageLoadingStore } from '../stores/usePageLoadingStore'

  const pageLoadingStore = usePageLoadingStore()

  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: '#FF3D3D',
    }
  )
</script>

<style scoped>
  .loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 100;
    box-shadow: 0 0 10px v-bind(color);
    animation: glow 2s ease-in-out infinite;
  }

  @keyframes glow {
    0% {
      background-color: v-bind(color);
    }
    50% {
      background-color: #fff;
    }
    100% {
      background-color: v-bind(color);
    }
  }
</style>
