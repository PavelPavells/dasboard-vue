<template>
  <footer :class="styles.footer">
    <div v-for="({ link, text }, index) in links" :class="styles.links" :key="index">
      <Link :link="link" :text="text" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Link from '../Link/Link.vue';
import { FooterProps } from './types';

import styles from './Footer.scss';

export default defineComponent({
  setup() {
    return { styles, links: CONST.infoLinks };
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
