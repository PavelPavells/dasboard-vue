<template>
  <a class="link" :href="href" rel="noreferrer" target="_blank">
    {{ text }}
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LinkProps } from './types';

export default defineComponent({
  setup(props) {
    const href =
      props.link !== '/help'
        ? `https://mercuryo.io${props.link}?utm_source=my.mercuryo&utm_medium=referral`
        : 'https://help.mercuryo.io';

    return { href };
  },
  props: {
    className: {
      type: String as PropType<LinkProps['className']>,
    },
    link: {
      type: String as PropType<LinkProps['link']>,
    },
    text: {
      type: String as PropType<LinkProps['text']>,
    },
  },
});
</script>

<style>
@import url('./Link.scss');
</style>
