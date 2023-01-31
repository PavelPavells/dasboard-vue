<template>
  <label :show="label" class="label">
    {{ label }}
  </label>
  <div class="input-wrapper" :class="{ 'error-border': errorBorder, 'with-border': withBorder }">
    <input
      class="input"
      :type="masked ? 'password' : 'text'"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      @blur="$emit('blur', handleValidation)"
      @keyup="$emit('keyup', handleValidation)"
    />
    <button v-show="isPasswordType" class="switch-masked" type="button" @click="handleSwitchMask">
      <BaseIcon v-if="masked" name="eye_closed" class="icon" />
      <BaseIcon v-else name="eye_opened" class="icon" />
    </button>
  </div>
  <div class="error-wrapper" :active="error">
    <div :show="Boolean(error)" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, VueElement } from 'vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { useState } from '@utils/hooks';
import { InputProps } from './types';

export default defineComponent({
  setup(props) {
    const isPasswordType = props.type === 'password';
    const [masked, setMasked] = useState(isPasswordType);

    const getInputType = () => {
      if (!isPasswordType) return props.type;
      if (masked) return 'password';

      return 'text';
    };

    const handleSwitchMask = () => setMasked(!masked.value);

    const errorMessage = computed(() => {
      if (props.error) {
        return props.error.charAt(0).toUpperCase() + props.error.slice(1);
      }

      return '';
    });

    const errorBorder = computed(() => {
      return props.error ? 'error-border' : '';
    });

    return {
      masked,
      isPasswordType,
      type: getInputType(),
      handleSwitchMask,
      error: errorMessage,
      errorBorder,
      withBorder: props.withBorder,
    };
  },
  emits: ['blur', 'keyup', 'update:value'],
  components: {
    BaseIcon,
  },
  props: {
    withBorder: {
      type: Boolean as PropType<InputProps['withBorder']>,
      default: true,
    },
    label: {
      type: String as PropType<InputProps['label']>,
    },
    value: {
      type: String as PropType<InputProps['value']>,
    },
    placeholder: {
      type: String as PropType<InputProps['placeholder']>,
    },
    error: {
      type: String as PropType<InputProps['error']>,
    },
    icon: {
      type: VueElement as PropType<InputProps['icon']>,
    },
    showMask: {
      type: Boolean as PropType<InputProps['showMask']>,
    },
    withIcon: {
      type: Boolean as PropType<InputProps['withIcon']>,
    },
    isLoading: {
      type: Boolean as PropType<InputProps['isLoading']>,
    },
    type: {
      type: String as PropType<InputProps['type']>,
    },
    handleValidation: {
      type: Function as PropType<any>,
    },
  },
});
</script>

<style>
@import url('./Input.scss');
</style>
