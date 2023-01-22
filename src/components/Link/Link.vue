<template>
  <a
    class="link"
    v-bind:link="
      link !== '/help'
        ? `https://mercuryo.io${link}?utm_source=my.mercuryo&utm_medium=referral`
        : 'https://help.mercuryo.io'
    "
    rel="noreferrer"
    target="_blank"
  >
    {{ text }}
  </a>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { LinkProps } from './types';

export default {
  name: 'LinkComponent',
  props: {
    className: {
      type: Object as PropType<LinkProps['className']>,
      required: false,
    },
    link: {
      type: Object as PropType<LinkProps['link']>,
      required: true,
    },
    text: {
      type: Object as PropType<LinkProps['text']>,
      required: true,
    },
  },
};
</script>
