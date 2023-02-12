<template>
  <main :class="styles.main">
    <LoaderLayout :isLoading="isLoading">
      <div :class="styles.main__wrapper">
        <Sidebar />
        <div :class="styles.main__wrapper__content">
          <Header />
          <div :class="styles.main__content">
            <slot />
          </div>
        </div>
      </div>
    </LoaderLayout>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BaseIcon } from '@components/ui';
import Sidebar from './Sidebar/Sidebar.vue';
import Header from './Header/Header.vue';
import LoaderLayout from '../Loader/Loader.vue';

import styles from './Main.scss';

export default defineComponent({
  setup() {
    const isLoading = ref(false);

    return { isLoading, styles };
  },
  components: {
    LoaderLayout,
    Header,
    Sidebar,
    BaseIcon,
  },
});
</script>
