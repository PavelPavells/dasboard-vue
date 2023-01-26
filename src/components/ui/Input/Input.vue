<template>
  <label :show="label" class="label">
    {{ label }}
  </label>
  <div class="input-wrapper" :class="stylesObj">
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
    <button :show="getShowMask" class="switch-masked" type="button" @click="switchMasked">
      <BaseIcon :show="getMask" name="eye_closed" class="icon" />
      <BaseIcon :show="!getMask" name="eye_opened" class="icon" />
    </button>
  </div>
  <div class="error-wrapper" :active="error">
    <div :show="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType, VueElement } from 'vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { InputProps } from './types';

export default defineComponent({
  setup(props) {
    const { withBorder, error } = toRefs(props);

    return {
      masked: true,
      error,
      stylesObj: {
        'with-border': withBorder,
      },
    };
  },
  computed: {
    getShowMask() {
      return this.showMask && this.type === 'password';
    },
    getMask() {
      return this.masked && this.type === 'password';
    },
  },
  methods: {
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
  },
});
</script>

<style>
@import url('./Input.scss');
</style>
