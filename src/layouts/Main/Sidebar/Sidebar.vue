<template>
  <nav class="nav">NAV</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useIsDesktop } from '@utils/hooks';

export default defineComponent({
  setup() {
    const isDesktop = useIsDesktop();
  },
  components: {},
});
</script>

<style lang="scss">
@import url('./Sidebar.scss');
</style>
