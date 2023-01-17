<template>
  <label :show="label" class="label">
    {{ label }}
  </label>
  <div class="input-wrapper" v-bind:class="(error || false, withBorder || true)">
    <div :show="icon" class="icon">{{ icon }}</div>
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
      <!-- <EyeClosed :show="withIcon && state.masked" class="eye-icon" />
      <EyeOpened :show="withIcon && !state.masked" class="eye-icon" /> -->
    </button>
  </div>
  <div class="error-wrapper" :active="error">
    <div :show="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, VueElement } from "vue";
// import { EyeClosed, EyeOpened } from "@icons";
import { InputProps } from "./types";

export default defineComponent({
  name: "InputComponent",
  components: {
    // EyeClosed,
    // EyeOpened,
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
      this.state.masked = !this.state.masked;
    },
    setIsPasswordType() {
      this.state.masked = this.$props.type === "password";
    },
    switchMasked() {
      this.state.masked = !this.state.masked;
    },
  },
  props: {
    withBorder: {
      type: Boolean as PropType<InputProps["withBorder"]>,
    },
    label: {
      type: String as PropType<InputProps["label"]>,
    },
    modelValue: {
      type: Object as PropType<InputProps["modelValue"]>,
    },
    error: {
      type: String as PropType<InputProps["error"]>,
    },
    icon: {
      type: VueElement as PropType<InputProps["icon"]>,
    },
    showMask: {
      type: Boolean as PropType<InputProps["showMask"]>,
    },
    withIcon: {
      type: Boolean as PropType<InputProps["withIcon"]>,
    },
    isLoading: {
      type: Boolean as PropType<InputProps["isLoading"]>,
    },
    type: {
      type: String as PropType<InputProps["type"]>,
    },
  },
});
</script>

<style lang="scss">
@import url("./Input.scss");
</style>
