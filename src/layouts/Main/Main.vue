<template>
  <main class="main">
    <LoaderLayout :isLoading="isLoading">
      <div class="wrapper">
        <Sidebar />
        <div class="wrapper-content">
          <Header />
          <div class="content">
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

export default defineComponent({
  setup() {
    const isLoading = ref(false);

    return { isLoading };
  },
  components: {
    LoaderLayout,
    Header,
    Sidebar,
    BaseIcon,
  },
});
</script>

<style>
@import url('./Main.scss');
</style>
