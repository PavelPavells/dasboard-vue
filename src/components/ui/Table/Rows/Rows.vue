<template>
  <div v-for="row in data" :key="row">
    <tr v-for="column in columns" :key="column.key">
      <td>
        <div class="content" v-bind="dataAttributes">{{ row[column.key] }}</div>
      </td>
    </tr>
  </div>
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
  data() {
    return {
      dataAttributes: this.data.map(row => {
        this.columns.map(column => {
          return {
            ...(column.param?.key ? { [`data-${column.param.key}`]: row[column.param.key] } : {}),
          };
        });
      }),
    };
  },
});
</script>

<style>
@import url("./Rows.scss");
</style>
