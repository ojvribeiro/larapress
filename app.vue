<template>
  <div>
    <LoadingIndicator />

    <Pages />
  </div>
</template>

<style>
  @import '@assets/sass/main.scss';

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.2s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
