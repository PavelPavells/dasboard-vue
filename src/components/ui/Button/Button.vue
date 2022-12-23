<template>
  <button class="button" :bind="(disabled, isLoading)">
    <div :show="icon" class="button__icon">{{ icon }}</div>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ButtonProps } from "./types";

export default defineComponent({
  name: "ButtonComponent",
  computed: {
    cssVars() {
      return {
        "--disabled": this.$props.disabled,
        "--isLoading": this.$props.isLoading,
      };
    },
  },
  props: {
    className: {
      type: Object as PropType<ButtonProps["className"]>,
    },
    isLoading: {
      type: Object as PropType<ButtonProps["isLoading"]>,
    },
    outline: {
      type: Object as PropType<ButtonProps["outline"]>,
    },
    width: {
      type: Object as PropType<ButtonProps["width"]>,
    },
    fullWidth: {
      type: Object as PropType<ButtonProps["fullWidth"]>,
    },
    icon: {
      type: Object as PropType<ButtonProps["icon"]>,
    },
    disabled: {
      type: Object as PropType<ButtonProps["disabled"]>,
    },
  },
});
</script>

<style lang="scss">
@import url("./Button.scss");
</style>
