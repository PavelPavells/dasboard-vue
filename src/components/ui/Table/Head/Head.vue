<template>
  <thead class="head">
    <tr>
      <th
        v-for="{ header, key, width = 100 } in columns"
        :key="key"
        :style="{ width: width }"
        class="th"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColumnType } from "../types";

export default defineComponent({
  name: "HeadComponent",
  props: {
    columns: {
      type: Object as PropType<ColumnType[]>,
      required: true,
    },
  },
});
</script>

<style>
@import url("./Head.scss");
</style>
