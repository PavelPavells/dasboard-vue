<template>
  <div :style="{ width: `${size || 32}px`, height: `${size || 32}px` }">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 38 38"
      :style="{ stroke: color || 'var(--color-main-blue)' }"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".3" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpinnerProps } from './types';

export default defineComponent({
  props: {
    color: {
      type: String as PropType<SpinnerProps['color']>,
    },
    size: {
      type: Number as PropType<SpinnerProps['size']>,
      default: 32,
    },
  },
});
</script>

<style>
@import url('./Spinner.scss');
</style>
