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
        <!-- <EyeClosedIcon :show="withIcon && state.masked" class="eye-icon" />
        <EyeOpenedIcon :show="withIcon && !state.masked" class="eye-icon" /> -->
      </button>
    </div>
    <div class="error-wrapper" :active="hasError">
      <div :show="hasError" class="error">{error}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { InputProps } from "./types";

export default defineComponent({
  name: "InputComponent",
  data() {
    return {
      state: {
        masked: true,
        hasError: false,
        withBorder: false,
        value: "",
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
      required: false,
    },
    label: {
      type: Object as PropType<InputProps["label"]>,
      required: false,
    },
    hasError: {
      type: Object as PropType<InputProps["hasError"]>,
      required: false,
    },
    icon: {
      type: Object as PropType<InputProps["icon"]>,
      required: false,
    },
    showMask: {
      type: Object as PropType<InputProps["showMask"]>,
      required: false,
    },
    withIcon: {
      type: Object as PropType<InputProps["withIcon"]>,
      required: false,
    },
    isLoading: {
      type: Object as PropType<InputProps["isLoading"]>,
      required: false,
    },
    type: {
      type: Object as PropType<InputProps["type"]>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import url("./Input.scss");
</style>
