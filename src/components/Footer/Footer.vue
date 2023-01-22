<template>
  <footer class="footer">
    <div v-for="infoLink in infoLinks" class="links" :key="infoLink.link">
      <Link :link="infoLink.link" :text="infoLink.text" />kjhgfgkjgh
    </div>
  </footer>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Link from '../Link/Link.vue';
import { infoLinks } from './const';
import { FooterProps, InfoLinksType } from './types';

export default {
  name: 'FooterComponent',
  components: {
    Link,
  },
  data() {
    return infoLinks;
  },
  props: {
    className: {
      type: Object as PropType<FooterProps['className']>,
      required: false,
    },
  },
};
</script>

<style>
@import url('./Footer.scss');
</style>
