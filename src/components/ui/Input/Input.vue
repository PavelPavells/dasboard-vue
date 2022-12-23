<template>
  <div class="input">
    <label :show="label" class="label" htmlFor="id">
      {{ label }}
    </label>
    <div class="input-wrapper" :hasError="hasError" :withBorder="withBorder">
      <div :show="icon" class="icon">{{ icon }}</div>
      <!-- <InputMask mask="mask"> {() => <input ref="ref" />} </InputMask> -->
      <button
        :show="showMask && state.isPasswordType"
        class="switch-masked"
        type="button"
        :click="setMasked"
      >
        <EyeClosed :show="withIcon && state.masked" class="eye-icon" />
        <EyeOpened :show="withIcon && !state.masked" class="eye-icon" />
      </button>
    </div>
    <div class="error-wrapper" :active="hasError">
      <div :show="hasError" class="error">{{ state.error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { EyeClosed, EyeOpened } from "@icons";
import { InputProps } from "./types";

export default defineComponent({
  name: "InputComponent",
  components: {
    EyeClosed,
    EyeOpened,
  },
  data() {
    return {
      state: {
        masked: true,
        hasError: false,
        withBorder: false,
        value: "",
        error: this.$props.hasError,
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
    handleChange(event: Event) {
      this.state.value = (event.target as HTMLInputElement).value;
    },
    switchMasked() {
      this.state.masked = !this.state.masked;
    },
  },
  props: {
    withBorder: {
      type: Object as PropType<InputProps["withBorder"]>,
    },
    label: {
      type: Object as PropType<InputProps["label"]>,
    },
    hasError: {
      type: Object as PropType<InputProps["hasError"]>,
    },
    icon: {
      type: Object as PropType<InputProps["icon"]>,
    },
    showMask: {
      type: Object as PropType<InputProps["showMask"]>,
    },
    withIcon: {
      type: Object as PropType<InputProps["withIcon"]>,
    },
    isLoading: {
      type: Object as PropType<InputProps["isLoading"]>,
    },
    type: {
      type: Object as PropType<InputProps["type"]>,
    },
  },
});
</script>

<style lang="scss">
@import url("./Input.scss");
</style>
