<template>
  <header :class="styles.wrapper">
    <div :class="styles.page__info">
      <BreadCrumbs />
      <h1 :class="styles.name">Widgets</h1>
    </div>
    <div :class="styles.user__info">
      <BaseIcon name="bell" />
      <img v-if="hasAvatar" :src="image" alt="avatar" :class="styles.avatar" />
      <BaseIcon v-else name="avatar" :class="styles.avatar" />
      <BaseIcon name="arrow_down" :class="styles.arrow" />
      <!-- <div :class="styles.modal__wrapper">DROPDOWN</div> -->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BaseIcon } from '@components/ui';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs.vue';

import styles from './Header.scss';

export default defineComponent({
  setup() {
    const hasAvatar = ref(false);
    const image = '';

    return { styles, hasAvatar, image };
  },
  components: {
    BreadCrumbs,
    BaseIcon,
  },
});
</script>
