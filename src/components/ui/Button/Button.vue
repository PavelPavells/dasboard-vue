<template>
  <button
    :type="type"
    :class="[styles.button, { isDisabled }]"
    :style="{ width: `${width}px` || '100%' }"
    @click.prevent="$emit('click', onClick)"
  >
    <Spinner
      v-if="isLoading"
      :class="styles.button__loader"
      color="var(--color-main-bg)"
      :size="25"
    />
    <div v-if="!isLoading && icon" :class="styles.button__icon">
      <BaseIcon :name="icon" />
    </div>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, VueElement, PropType } from 'vue';
import Spinner from '../Spinner/Spinner.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ButtonProps } from './types';

import styles from './Button.scss';

export default defineComponent({
  setup() {
    return { styles };
  },
  emits: ['click'],
  components: {
    Spinner,
    BaseIcon,
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
