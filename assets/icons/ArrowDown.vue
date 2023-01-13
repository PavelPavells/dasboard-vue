<template>
  <svg viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L3.5 3.5L6 1" stroke="currentColor" stroke-linecap="square" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IconProps } from "./types";

export default defineComponent({
  name: "ArrowDown",
  props: {
    width: Object as PropType<IconProps["width"]>,
  },
  color: {
    type: Object as PropType<IconProps["color"]>,
  },
});
</script>
