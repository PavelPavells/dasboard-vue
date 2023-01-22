<template>
  <section class="wrapper">
    <div class="content">
      <div class="inner-wrapper">
        <!-- <LogoMain name="main_logo" class="logo" /> -->
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
// import { LogoMain } from '@icons';

export default { name: 'AuthLayout', components: { Footer } };
</script>

<style>
@import url('./AuthLayout.scss');
</style>
