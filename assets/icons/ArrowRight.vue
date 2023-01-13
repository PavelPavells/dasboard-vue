<template>
  <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.00075 4.35636L1.75775 8.59937L0.34375 7.18437L3.17275 4.35637L0.34375 1.52837L1.75775 0.113365L6.00075 4.35636Z"
      fill="#00447C"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IconProps } from "./types";

export default defineComponent({
  name: "ArrowRight",
  props: {
    width: Object as PropType<IconProps["width"]>,
  },
  color: {
    type: Object as PropType<IconProps["color"]>,
  },
});
</script>
