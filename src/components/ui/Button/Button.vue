<template>
  <button :type="type" class="button" :class="{ disabled: hasDisabled, loading: isLoading }">
    <div v-if="icon" class="button__icon">
      <component :is="icon" />
    </div>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, VueElement, PropType, computed } from 'vue';
import { ButtonProps } from './types';

export default defineComponent({
  setup(props) {
    const hasDisabled = computed(() => {
      return props.isDisabled ? 'disabled' : '';
    });

    return { hasDisabled };
  },
  props: {
    type: {
      type: String as PropType<ButtonProps['type']>,
    },
    className: {
      type: String as PropType<ButtonProps['className']>,
    },
    isLoading: {
      type: Boolean as PropType<ButtonProps['isLoading']>,
    },
    outline: {
      type: Boolean as PropType<ButtonProps['outline']>,
    },
    width: {
      type: String as PropType<ButtonProps['width']>,
    },
    fullWidth: {
      type: Boolean as PropType<ButtonProps['fullWidth']>,
    },
    icon: {
      type: VueElement as PropType<ButtonProps['icon']>,
    },
    isDisabled: {
      type: Boolean as PropType<ButtonProps['isDisabled']>,
    },
  },
});
</script>

<style>
@import url('./Button.scss');
</style>
