<template>
  <table class="table">
    <Head :columns="columns" />
    <Rows :data="data" :columns="columns" />
    <div :show="hasData" class="empty">No data yet</div>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Head } from "./Head/Head.vue";
import { Rows } from "./Rows/Rows.vue";
import { TableProps, ColumnType } from "./types";

function defineGenericComponent<T, K extends keyof T>({
  data,
  columns,
  className,
}: TableProps<T, K>) {
  return defineComponent({
    name: "TableComponent",
    components: {
      Head,
      Rows,
    },
    setup() {
      const hasData = data.length > 0;

      return { hasData, data, columns, className };
    }
  });
}

export const Table = <T, K extends keyof T>({ data, columns, className }: TableProps<T, K>) => {
  return defineGenericComponent<T, K>({ data, columns, className });
};

export default defineGenericComponent();
</script>
