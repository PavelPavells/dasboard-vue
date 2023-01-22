<template>
  <table class="table">
    <Head :columns="columns" />
    <Rows :data="data" :columns="columns" />
    <div :show="hasData" class="empty">No data yet</div>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Head from './Head/Head.vue';
import Rows from './Rows/Rows.vue';
import { TableProps } from './types';

export default defineComponent({
  name: 'TableComponent',
  components: {
    Head,
    Rows,
  },
  data() {
    const hasData = Boolean(this.$props.data.length);

    return { hasData };
  },
  props: {
    data: {
      type: Object as PropType<TableProps['data']>,
      required: true,
    },
    columns: {
      type: Object as PropType<TableProps['columns']>,
      required: true,
    },
  },
});
</script>
<style>
@import url('./Table.scss');
</style>
