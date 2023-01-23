<template>
  <a class="link" v-bind:href="href" rel="noreferrer" target="_blank">
    {{ text }}
  </a>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { LinkProps } from './types';

export default {
  name: 'LinkComponent',
  setup(props: any): { href: string } {
    const href =
      props.link !== '/help'
        ? `https://mercuryo.io${props.link}?utm_source=my.mercuryo&utm_medium=referral`
        : 'https://help.mercuryo.io';

    return { href };
  },
  props: {
    className: {
      type: String as PropType<LinkProps['className']>,
      required: false,
    },
    link: {
      type: String as PropType<LinkProps['link']>,
      required: true,
    },
    text: {
      type: String as PropType<LinkProps['text']>,
      required: true,
    },
  },
};
</script>

<style>
@import url('./Link.scss');
</style>
