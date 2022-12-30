<template>
  <tr v-for="row in data" :key="row" class="tr">
    <td v-for="column in columns" :key="column.key" class="td">
      <div
        v-bind="{
          ...(column.param?.key ? { [`data-${column.param.key}`]: row[column.param.key] } : {}),
        }"
        class="content"
      >
        {{ row[column.key] }}
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableProps } from "../types";

export default defineComponent({
  name: "RowsComponent",
  props: {
    data: {
      type: Object as PropType<TableProps["data"]>,
      required: true,
    },
    columns: {
      type: Object as PropType<TableProps["columns"]>,
      required: true,
    },
  },
});
</script>

<style>
@import url("./Rows.scss");
</style>
