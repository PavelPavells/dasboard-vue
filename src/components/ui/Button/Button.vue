<template>
  <button
    :type="type"
    class="button"
    :class="{ disabled: hasDisabled, loading: isLoading }"
    :style="{ width: `${width}px` || '100%' }"
    @click.prevent="$emit('click', onClick)"
  >
    <Spinner v-if="isLoading" class="loader" color="var(--color-main-bg)" :size="25" />
    <div v-else>
      <div v-if="icon" class="button__icon">
        <component :is="icon" />
      </div>
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, VueElement, PropType, computed } from 'vue';
import Spinner from '../Spinner/Spinner.vue';
import { ButtonProps } from './types';

export default defineComponent({
  setup(props) {
    const hasDisabled = computed(() => {
      return props.isDisabled ? 'disabled' : '';
    });

    return { hasDisabled };
  },
  emits: ['click'],
  components: {
    Spinner,
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
      type: Number as PropType<ButtonProps['width']>,
    },
    fullWidth: {
      type: Boolean as PropType<ButtonProps['fullWidth']>,
      default: true,
    },
    icon: {
      type: VueElement as PropType<ButtonProps['icon']>,
    },
    isDisabled: {
      type: Boolean as PropType<ButtonProps['isDisabled']>,
    },
    onClick: {
      type: Function as PropType<any>,
    },
  },
});
</script>

<style>
@import url('./Button.scss');
</style>
