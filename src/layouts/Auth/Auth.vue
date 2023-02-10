<template>
  <section :class="styles.auth">
    <div :class="styles.auth__wrapper">
      <div :class="styles.auth__content">
        <div :class="styles.inner__wrapper">
          <BaseIcon name="logo_main" :class="styles.auth__logo" />
          <slot />
        </div>
        <Footer />
      </div>
    </div>
    <div :class="styles.auth__image__wrapper">
      <img src="/img/auth/auth.png" :class="styles.auth__image" alt="auth_image" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@components/Footer/Footer.vue';
import { BaseIcon } from '@components/ui';

import styles from './Auth.scss';

export default defineComponent({
  setup() {
    return { styles };
  },
  components: { BaseIcon, Footer },
});
</script>
