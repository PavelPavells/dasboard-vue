<template>
  <component :is="getIcon" role="img" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IconsProps } from './types';

const iconsList: IconsProps = {
  arrow_big: require('@assets/icons/ArrowBig.vue'),
  arrow_down: require('@assets/icons/ArrowDown.vue'),
  arrow_main: require('@assets/icons/ArrowMain.vue'),
  arrow_right: require('@assets/icons/ArrowRight.vue'),
  avatar_main: require('@assets/icons/AvatarMain.vue'),
  eye_closed: require('@assets/icons/EyeClosed.vue'),
  eye_opened: require('@assets/icons/EyeOpened.vue'),
  logo_compact: require('@assets/icons/LogoCompact.vue'),
  logo_main: require('@assets/icons/LogoMain.vue'),
};

export default defineComponent({
  name: 'IconComponent',
  props: {
    name: {
      type: Object as PropType<keyof typeof iconsList>,
      required: true,
    },
  },
  computed: {
    getIcon() {
      return iconsList[this.name];
    },
  },
});
</script>
