<template>
  <nav :class="[styles.nav, isOpen ? `${styles.nav}_isOpen` : '']">
    <div :class="styles.wrapper">
      <div :class="[styles.wrapper__logo, isOpen ? `${styles.wrapper__logo}_isOpen` : '']">
        <BaseIcon :name="!isOpen && isDesktop ? 'logo_compact' : 'logo_main'" />
      </div>
      <button
        type="button"
        :class="[styles.toggler, isOpen ? `${styles.toggler}_isOpen` : '']"
        @click="handleToggleMenu"
      >
        <BaseIcon name="arrow_right" />
      </button>
      <ul :class="[styles.menu, isOpen ? 'isOpen' : '']">
        <li
          :class="[
            styles.item,
            isOpen ? 'isOpen' : '',
            { isActive: isWidgetsRoute ? 'isActive' : '' },
          ]"
        >
          <Button
            :class="[styles.button, { isActive: isWidgetsRoute ? 'isActive' : '' }]"
            @click="handleRedirectToWidgets"
          >
            <BaseIcon name="widgets" />
            <span
              :class="[
                styles.description,
                isOpen ? 'isOpen' : '',
                { isActive: isWidgetsRoute ? 'isActive' : '' },
              ]"
              >Widgets</span
            >
          </Button>
        </li>
        <li
          :class="[
            styles.item,
            isOpen ? 'isOpen' : '',
            { isActive: isTransactionsRoute ? 'isActive' : '' },
          ]"
        >
          <Button
            :class="[styles.button, { isActive: isTransactionsRoute ? 'isActive' : '' }]"
            @click="handleRedirectToTransactions"
          >
            <BaseIcon name="transactions" />
            <span
              :class="[
                styles.description,
                isOpen ? 'isOpen' : '',
                { isActive: isTransactionsRoute ? 'isActive' : '' },
              ]"
            >
              Transactions
            </span>
          </Button>
        </li>
      </ul>
      <ul :class="[styles.submenu, isOpen ? 'isOpen' : '']">
        <li :class="[styles.item, isOpen ? 'isOpen' : '']">
          <a
            rel="noreferrer"
            :class="styles.link"
            href="https://github.com/mercuryoio/api-migration-docs/blob/master/Widget_API_Mercuryo_v1.6.md"
            target="_blank"
          >
            <BaseIcon name="documentation" />
            <span :class="[styles.description, isOpen ? 'isOpen' : '']">Documentation</span>
          </a>
        </li>
        <li :class="[styles.item, isOpen ? 'isOpen' : '']">
          <a
            rel="noreferrer"
            :class="styles.link"
            href="https://help.mercuryo.io/en/collections/3407347-b2b-partner-help-center"
            target="_blank"
          >
            <BaseIcon name="help_center" />
            <span :class="[styles.description, isOpen ? 'isOpen' : '']">Help Center</span>
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
      setIsOpen,
      isDesktop,
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
