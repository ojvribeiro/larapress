<script setup lang="ts">
  import { computed } from 'vue'
  import { Icon } from '@iconify/vue'

  interface Props {
    name?: string
    icon?: string
    color?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    color: false,
  })

  const maskSrc = computed<string>(() => require(`@/resources/assets/icons/${props.name}.svg`))
</script>

<template>
  <i
    v-if="!props.icon"
    class="icon"
    :style="
      !props.color
        ? {
            'mask-image': `url(${maskSrc})`,
            'background-color': 'currentColor',
          }
        : { 'background-image': `url(${maskSrc})` }
    "
  ></i>

  <component
    v-else
    :is="props.icon && Icon"
    :icon="props.icon"
    class="icon"
  ></component>
</template>

<style scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
  }

  i.icon {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }
</style>
