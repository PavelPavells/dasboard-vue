<template>
  <LoaderLayout :isLoading="isLoading">
    <section class="wrapper">
      <!-- <Sidebar />
      <Header /> -->
      <div class="content">
        <slot />
      </div>
    </section>
  </LoaderLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BaseIcon } from '@components/ui';
import LoaderLayout from '../Loader/Loader.vue';

export default defineComponent({
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    LoaderLayout,
    BaseIcon,
  },
});
</script>

<style>
@import url('./Main.scss');
</style>
