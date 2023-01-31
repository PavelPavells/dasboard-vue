<template>
  <section class="loader" :style="height">
    <Spinner v-if="isLoading" :size="size" />
    <slot v-else />
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Spinner } from '@components/ui';
import { LoaderProps } from './types';

export default {
  components: {
    Spinner,
  },
  props: {
    isLoading: {
      type: Boolean as PropType<LoaderProps['isLoading']>,
    },
    height: {
      type: String as PropType<LoaderProps['height']>,
    },
    size: {
      type: Number as PropType<LoaderProps['size']>,
    },
  },
};
</script>

<style>
@import url('./Loader.scss');
</style>
