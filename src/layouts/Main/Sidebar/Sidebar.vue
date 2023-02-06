<template>
  <nav :class="isOpen">
    <div class="wrapper">
      <div class="wrapper-logo" :class="isOpen">
        <BaseIcon :name="!isOpen && isDesktop ? 'logo_compact' : 'logo_main'" />
      </div>
      <button type="button" class="toggler" :class="isOpen" @click="handleClick">
        <BaseIcon name="arrow_right" />
      </button>
      <ul class="menu" :class="isOpen">
        <li class="item" :class="{ isActive: isWidgetsRoute, isOpen }">
          <Button
            class="button"
            :class="{ isActive: isWidgetsRoute }"
            @click="() => redirectTo(CONST.nav.widgets)"
          >
            <BaseIcon name="widgets" />
            <span class="description" :class="{ isActive: isWidgetsRoute, isOpen }">Widgets</span>
          </Button>
        </li>
        <li class="item" :class="{ isActive: isTransactionsRoute, isOpen }">
          <Button
            class="button"
            :class="{ isActive: isWidgetsRoute }"
            @click="() => redirectTo(CONST.nav.transactions)"
          >
            <BaseIcon name="transactions" />
            <span class="description" :class="{ isActive: isWidgetsRoute, isOpen }">
              Transactions
            </span>
          </Button>
        </li>
      </ul>
      <ul class="sub-menu" :class="isOpen">
        <li class="item" :class="isOpen">
          <a
            rel="noreferrer"
            class="link"
            href="https://github.com/mercuryoio/api-migration-docs/blob/master/Widget_API_Mercuryo_v1.6.md"
            target="_blank"
          >
            <BaseIcon name="documentation" />
            <span class="description" :class="isOpen">Documentation</span>
          </a>
        </li>
        <li class="item" :class="isOpen">
          <a
            rel="noreferrer"
            class="link"
            href="https://help.mercuryo.io/en/collections/3407347-b2b-partner-help-center"
            target="_blank"
          >
            <BaseIcon name="documentation" />
            <span class="description" :class="isOpen">Help Center</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
//TODO: fix CONST problem
import { defineComponent } from 'vue';
import { useIsDesktop, useState } from '@utils/hooks';
import { redirectTo } from '@utils';
import { Button, BaseIcon } from '@components/ui';

export default defineComponent({
  setup() {
    const [isOpen, setIsOpen] = useState(true);
    const isDesktop = useIsDesktop();

    const isWidgetsRoute = true;
    const isTransactionsRoute = window.location.pathname === CONST.nav.transactions;

    return { isOpen, setIsOpen, isDesktop, isWidgetsRoute, isTransactionsRoute, redirectTo };
  },
  methods: {
    handleClick() {
      this.setIsOpen(!this.isOpen);
    },
  },
  components: {
    Button,
    BaseIcon,
  },
});
</script>

<style lang="scss" scoped>
@import url('./Sidebar.scss');
</style>
