<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.45001 11.2002C3.45001 11.2002 5.78183 15.9502 12 15.9502C18.2182 15.9502 20.55 11.2002 20.55 11.2002"
      stroke="currentColor"
    />
    <path d="M12 15.9502V18.8002" stroke="currentColor" />
    <path d="M4.79517 12.561L2.49999 14.1681" stroke="currentColor" />
    <path d="M7.99731 14.9624L6.59637 17.3889" stroke="currentColor" />
    <path d="M19.6051 12.9614L21.5 14.1682" stroke="currentColor" />
    <path d="M16.0027 14.9629L17.4036 17.3894" stroke="currentColor" />
  </svg>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IconProps } from './types';

export default {
  name: 'EyeClosed',
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
