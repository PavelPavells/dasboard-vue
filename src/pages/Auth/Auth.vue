<template>
  <section class="auth">
    <h1>This is an Auth page</h1>
    <Input type="text" />
    <Button>Login</Button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Input, Button } from "@components/ui";

export default defineComponent({
  name: "AuthComponent",
  components: {
    Input,
    Button,
  },
});
</script>

<style lang="scss">
@import url("./Auth.scss");
</style>
