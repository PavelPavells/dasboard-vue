<template>
  <div :class="styles.wrapper">
    <div :class="styles.crumbs">
      <Button :class="styles.route">mercuryo</Button>
      <Button
        v-for="crumb in routes"
        :class="styles.crumb"
        :key="crumb"
        @click="handleDynamicRedirect(crumb)"
      >
        <div :class="styles.separator">/</div>
        <div :class="styles.route">{{ crumb }}</div>
      </Button>
    </div>
    <Button :class="styles.export" @click="handleDownload">Export CSV</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from '@components/ui';
import { currentDate, dateFrom, getIntlDate, redirectTo } from '@utils';

import styles from './BreadCrumbs.scss';

export default defineComponent({
  setup() {
    const hasExportButton = true;
    const routes = [...new Set(window.location.pathname.replace('/', '').split('/'))] as string[];

    const range = {
      from: '',
      to: '',
    };

    return { hasExportButton, routes, range, styles };
  },
  components: {
    Button,
  },
  methods: {
    handleRedirect() {
      return redirectTo(CONST.nav.widgets);
    },
    handleDynamicRedirect(url: string) {
      return redirectTo(url);
    },
    handleDownload() {
      const fileType = 'text/plain;charset=UTF-8';
      const fileName = 'transactions';
      const fileExtension = '.csv';
    },
  },
});
</script>
