<template>
  <MainLayout>
    <section class="widgets">WIDGETS</section>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MainLayout } from '@layouts';

export default defineComponent({
  name: 'WidgetsComponent',
  components: {
    MainLayout,
  },
});
</script>

<style>
@import url('./Widgets.scss');
</style>
