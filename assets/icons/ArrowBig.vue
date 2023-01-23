<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="12" x2="16" y2="12" stroke="white" stroke-width="2" />
    <path
      d="M12 15.4298L15.43 11.9998L12 8.5698L13.27 7.2998L17.97 11.9998L13.27 16.6998L12 15.4298Z"
      fill="white"
    />
  </svg>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IconProps } from './types';

export default {
  name: 'ArrowBig',
  props: {
    width: {
      type: Object as PropType<IconProps['width']>,
    },
    color: {
      type: Object as PropType<IconProps['color']>,
    },
  },
};
</script>
