<template>
  <div class="auth">
    <h1>This is an Auth page</h1>
    <InputVue type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { InputVue } from "@components/ui";

export default defineComponent({
  name: "AuthComponent",
  components: {
    InputVue,
  },
});
</script>

<style lang="scss">
@import url("./Auth.scss");
</style>
