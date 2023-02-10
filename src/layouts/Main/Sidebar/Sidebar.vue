<template>
  <nav :class="[styles.sidebar, { isOpen }]">
    <div :class="styles.sidebar__wrapper">
      <div :class="[styles.sidebar__logo, { isOpen }]">
        <BaseIcon :name="!isOpen && isDesktop ? 'logo_compact' : 'logo_main'" />
      </div>
      <button
        type="button"
        class="toggler"
        :class="[styles.sidebar__toggler, { isOpen }]"
        @click="handleToggleMenu"
      >
        <BaseIcon name="arrow_right" />
      </button>
      <ul :class="[styles.sidebar__menu, { isOpen }]">
        <li :class="[styles.sidebar__item, { isOpen }, { isActive: isWidgetsRoute }]">
          <Button
            :class="[styles.sidebar__button, { isActive: isWidgetsRoute }]"
            @click="handleRedirectToWidgets"
          >
            <BaseIcon name="widgets" />
            <span :class="[styles.sidebar__description, { isOpen }, { isActive: isWidgetsRoute }]">
              Widgets
            </span>
          </Button>
        </li>
        <li :class="[styles.sidebar__item, { isOpen }, { isActive: isTransactionsRoute }]">
          <Button
            :class="[styles.sidebar__button, { isActive: isTransactionsRoute }]"
            @click="handleRedirectToTransactions"
          >
            <BaseIcon name="transactions" />
            <span
              :class="[styles.sidebar__description, { isOpen }, { isActive: isTransactionsRoute }]"
            >
              Transactions
            </span>
          </Button>
        </li>
      </ul>
      <ul :class="[styles.sidebar__submenu, { isOpen }]">
        <li :class="[styles.sidebar__item, { isOpen }]">
          <a
            rel="noreferrer"
            :class="styles.sidebar__link"
            href="https://github.com/mercuryoio/api-migration-docs/blob/master/Widget_API_Mercuryo_v1.6.md"
            target="_blank"
          >
            <BaseIcon name="documentation" />
            <span :class="[styles.sidebar__description, { isOpen }]">Documentation</span>
          </a>
        </li>
        <li :class="[styles.sidebar__item, { isOpen }]">
          <a
            rel="noreferrer"
            :class="styles.sidebar__link"
            href="https://help.mercuryo.io/en/collections/3407347-b2b-partner-help-center"
            target="_blank"
          >
            <BaseIcon name="help_center" />
            <span :class="[styles.sidebar__description, { isOpen }]">Help Center</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useIsDesktop, useState } from '@utils/hooks';
import { redirectTo } from '@utils';
import { Button, BaseIcon } from '@components/ui';

import styles from './Sidebar.scss';

export default defineComponent({
  setup() {
    const [isOpen, setIsOpen] = useState(true);
    const isDesktop = useIsDesktop();
    const route = useRoute();

    const isWidgetsRoute = route.fullPath === CONST.nav.widgets;
    const isTransactionsRoute = route.fullPath === CONST.nav.transactions;

    const handleToggleMenu = () => setIsOpen(!isOpen.value);

    return {
      isOpen,
      isDesktop: isDesktop.value,
      isWidgetsRoute,
      isTransactionsRoute,
      handleToggleMenu,
      redirectTo,
      styles,
    };
  },
  methods: {
    handleRedirectToWidgets() {
      redirectTo(CONST.nav.widgets);
    },
    handleRedirectToTransactions() {
      redirectTo(CONST.nav.transactions);
    },
  },
  components: {
    Button,
    BaseIcon,
  },
});
</script>
