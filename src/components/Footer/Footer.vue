<template>
  <footer class="footer">
    <div v-for="({ link, text }, index) in infoLinks" class="links" :key="index">
      <Link :link="link" :text="text" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Link from '../Link/Link.vue';
import { infoLinks } from './const';
import { FooterProps } from './types';

export default defineComponent({
  name: 'FooterComponent',
  components: {
    Link,
  },
  setup() {
    return { infoLinks };
  },
  props: {
    className: {
      type: Object as PropType<FooterProps['className']>,
      required: false,
    },
  },
});
</script>

<style>
@import url('./Footer.scss');
</style>
