<template>
  <section class="wrapper">
    <div class="content">
      <div class="inner-wrapper">
        <BaseIcon name="logo_main" class="logo" />
        <slot />
      </div>
      <Footer />
    </div>
    <div class="image-wrapper">
      <img src="/img/auth/auth.png" class="image" alt="auth_image" />
    </div>
  </section>
</template>

<script lang="ts">
import Footer from '@components/Footer/Footer.vue';
import { BaseIcon } from '@components/ui';

export default {
  components: { BaseIcon, Footer },
};
</script>

<style>
@import url('./AuthLayout.scss');
</style>
