<template>
  <footer class="footer">
    <div v-for="({ link, text }, index) in links" class="links" :key="index">
      <Link :link="link" :text="text" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Link from '../Link/Link.vue';
import { FooterProps } from './types';

export default defineComponent({
  setup() {
    return { links: CONST.infoLinks };
  },
  components: {
    Link,
  },
  props: {
    className: {
      type: String as PropType<FooterProps['className']>,
    },
  },
});
</script>

<style>
@import url('./Footer.scss');
</style>
