<template>
  <label :show="label" class="label">
    {{ label }}
  </label>
  <div class="input-wrapper" v-bind:class="withBorder && 'withBorder', error && 'error'">
    <input
      class="input"
      :type="type"
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button
      :show="showMask && state.isPasswordType"
      class="switch-masked"
      type="button"
      @click="setMasked"
    >
      <BaseIcon :v-show="masked" name="eye_closed" class="icon" />
      <BaseIcon :v-show="!masked" name="eye_opened" class="icon" />
    </button>
  </div>
  <div class="error-wrapper" :active="error">
    <div :show="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, VueElement } from 'vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { InputProps } from './types';

export default defineComponent({
  name: 'InputComponent',
  setup(props) {
    const masked = props.type === 'password';
    const withBorder = props.withBorder;
    const error = props.error || '';

    return { masked, withBorder, error };
  },
  data() {
    return {
      state: {
        masked: true,
        isPasswordType: false,
      },
    };
  },
  methods: {
    setMasked() {
      this.masked = !this.masked;
    },
    switchMasked() {
      this.masked = !this.masked;
    },
  },
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
    modelValue: {
      type: Object as PropType<InputProps['modelValue']>,
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
  },
});
</script>

<style>
@import url('./Input.scss');
</style>
