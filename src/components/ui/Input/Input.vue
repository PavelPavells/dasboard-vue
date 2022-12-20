<template>
  <div className="wrapper">
    <label :show="label" className="label" htmlFor="id">
      {{ label }}
    </label>
    <div
      className="input-wrapper"
      :hasError="hasError"
      :withBorder="withBorder"
    >
      <div :show="icon" className="icon">{{ icon }}</div>
      <InputMask mask="mask" {{...inputProps}}>
        {() => <input ref="ref" {{...inputProps}} />}
      </InputMask>
      <button
        :show="showMask && state.isPasswordType"
        className="switch-masked"
        type="button"
        :click="setMasked"
      >
        <EyeClosedIcon :show="withIcon && state.masked" className="eye-icon" />
        <EyeOpenedIcon :show="withIcon && !state.masked" className="eye-icon" />
      </button>
    </div>
    <div className="error-wrapper" , :active="hasError">
      <div :show="hasError" className="error">{error}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Input from "./types";

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
      type: Object as PropType<Input["withBorder"]>,
      required: false,
    },
    label: {
      type: Object as PropType<Input["label"]>,
      required: false,
    },
    hasError: {
      type: Object as PropType<Input["hasError"]>,
      required: false,
    },
    icon: {
      type: Object as PropType<Input["icon"]>,
      required: false,
    },
    showMask: {
      type: Object as PropType<Input["showMask"]>,
      required: false,
    },
    withIcon: {
      type: Object as PropType<Input["withIcon"]>,
      required: false,
    },
    isLoading: {
      type: Object as PropType<Input["isLoading"]>,
      required: false,
    },
    type: {
      type: Object as PropType<Input["type"]>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import url("./Input.scss");
</style>
