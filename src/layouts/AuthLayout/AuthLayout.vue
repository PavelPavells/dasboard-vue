<template>
  <section class="wrapper">
    <div class="content">
      <base-icon name="logo_main" class="logo" />
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
import { defineComponent } from 'vue';
import Footer from '@components/Footer/Footer.vue';
import { BaseIcon } from '@components/ui';

export default defineComponent({
  name: 'AuthLayout',
  components: { BaseIcon, Footer },
});
</script>

<style>
@import url('./AuthLayout.scss');
</style>
