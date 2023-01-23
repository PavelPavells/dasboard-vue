<template>
  <div className="spinner" v-bind:class="cssVars">
    <svg className="circular" viewBox="25 25 50 50">
      <circle
        className="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
        v-bind:stroke="$props.color || state.color"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpinnerProps } from './types';

export default defineComponent({
  name: 'SpinnerComponent',
  data() {
    return {
      state: {
        color: '#ebebeb',
      },
    };
  },
  computed: {
    cssVars() {
      return {
        '--size': this.$props.size,
      };
    },
  },
  props: {
    color: {
      type: Object as PropType<SpinnerProps['color']>,
    },
    size: {
      type: Object as PropType<SpinnerProps['size']>,
    },
  },
});
</script>

<style>
@import url('./Spinner.scss');
</style>
