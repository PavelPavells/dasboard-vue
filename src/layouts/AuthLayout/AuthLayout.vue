<template>
  <section class="wrapper">
    <div class="content">
      <Icon name="logo_main" class="logo" />
      <div class="inner-wrapper">
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
import { Icon } from '@components/ui';

export default { name: 'AuthLayout', components: { Icon, Footer } };
</script>

<style>
@import url('./AuthLayout.scss');
</style>
