<template>
  <header :class="styles.header">HEADER</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './Header.scss';

export default defineComponent({
  setup() {
    return { styles };
  },
});
</script>
