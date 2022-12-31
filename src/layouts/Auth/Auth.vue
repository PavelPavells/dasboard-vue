<template>
  <section class="wrapper">
    <div class="content">
      <div class="inner-wrapper">
        <!-- <Logo name="main_logo" class="logo" /> -->
        <slot />
      </div>
      <!-- <Footer /> -->
    </div>
    <img src="../../../assets/img/auth/auth.png" class="image" alt="auth_image" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "AuthComponent" });
</script>

<style lang="scss">
@import url("./Auth.scss");
</style>
