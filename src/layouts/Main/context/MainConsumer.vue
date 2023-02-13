<template>
  <div>
    <slot v-bind="{ handleScroll }" />
  </div>
</template>

<script lang="ts">
export default {
  inject: ['handleScroll'],
};
</script>
