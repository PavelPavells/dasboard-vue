<template>
  <component :is="icon" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ArrowBig from '@assets/icons/arrow_big.svg';
import ArrowDown from '@assets/icons/arrow_down.svg';
import ArrowMain from '@assets/icons/arrow_main.svg';
import ArrowRight from '@assets/icons/arrow_right.svg';
import AvatarMain from '@assets/icons/avatar_main.svg';
import EyeClosed from '@assets/icons/eye_closed.svg';
import EyeOpened from '@assets/icons/eye_opened.svg';
import LogoCompact from '@assets/icons/logo_compact.svg';
import LogoMain from '@assets/icons/logo_main.svg';
import CloseModal from '@assets/icons/close_modal.svg';
import Widgets from '@assets/icons/widgets.svg';
import Transactions from '@assets/icons/transactions.svg';
import Documentation from '@assets/icons/documentation.svg';
import HelpCenter from '@assets/icons/help_center.svg';

import { IconsProps } from './types';

export const iconsList: IconsProps = {
  arrow_big: ArrowBig,
  arrow_down: ArrowDown,
  arrow_main: ArrowMain,
  arrow_right: ArrowRight,
  avatar_main: AvatarMain,
  eye_closed: EyeClosed,
  eye_opened: EyeOpened,
  logo_compact: LogoCompact,
  logo_main: LogoMain,
  close_modal: CloseModal,
  widgets: Widgets,
  transactions: Transactions,
  documentation: Documentation,
  help_center: HelpCenter,
};

export default defineComponent({
  setup(props) {
    const icon = iconsList[props.name];

    return { icon };
  },
  props: {
    name: {
      type: String as PropType<keyof typeof iconsList>,
      required: true,
    },
  },
});
</script>
