<template>
  <div class="loading-indicator" v-show="isLoading" />
</template>

<script setup>
  import { ref } from 'vue'
  import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

  const isLoading = ref(false)

  onBeforeRouteLeave((to, from) => {
    console.log('onBeforeRouteLeave');
    isLoading.value = true
  })

  onBeforeRouteUpdate(() => {
    isLoading.value = true
  })

  // This is a hack to make sure the loading indicator is hidden
  // when the page is loaded. Otherwise, it will be visible for a
  // split second before the page is rendered.
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
</script>

<style lang="scss">
  .loading-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #ff3000;
    z-index: 100;
  }
</style>
