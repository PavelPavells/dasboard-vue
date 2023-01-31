<template>
  <div
    :style="animationStyles"
    :class="{ hidden: fade ? isClosed : !isOpen }"
    class="wrapper-modal"
  >
    <div v-if="overlay" class="overlay" />
    <div class="modal" :class="{ hidden: !isOpen }" ref="ref">
      <div class="modal__content">
        <slot />
      </div>
      <Button
        type="button"
        class="modal__button"
        :class="{
          hidden: hideCloseButton,
          hiddenMobile: hideMobileCloseButton,
        }"
        @click.prevent="$emit('input', onClose)"
      >
        <BaseIcon name="close_modal" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref } from 'vue';
import Button from '../ui/Button/Button.vue';
import BaseIcon from '../ui/BaseIcon/BaseIcon.vue';
import { useState } from '@utils/hooks';
import { ModalProps } from './types';

const ANIMATION_DURATION = 200;

export default defineComponent({
  setup(props) {
    const [isClosed, setIsClosed] = useState<boolean>(true);

    computed(() => {
      if (props.isOpen) setIsClosed(false);
      else setTimeout(() => setIsClosed(true), ANIMATION_DURATION);
    });

    return { isClosed };
  },
  emits: ['input'],
  computed: {
    animationStyles() {
      return {
        '--fade-duration': this.fade ? `${ANIMATION_DURATION}ms` : 0,
        '--slide-duration': this.slide ? `${ANIMATION_DURATION}ms` : 0,
      };
    },
  },
  methods: {
    handleClose() {
      if (this.onClose) this.onClose();
    },
  },
  components: {
    Button,
    BaseIcon,
  },
  props: {
    className: {
      type: String as PropType<ModalProps['className']>,
    },
    ref: {
      type: Object as PropType<Ref<any>>,
    },
    isOpen: {
      type: Boolean as PropType<ModalProps['isOpen']>,
    },
    onClose: {
      type: Function as PropType<ModalProps['onClose']>,
    },
    hideCloseButton: {
      type: Boolean as PropType<ModalProps['hideCloseButton']>,
    },
    hideMobileCloseButton: {
      type: Boolean as PropType<ModalProps['hideMobileCloseButton']>,
    },
    overlay: {
      type: Boolean as PropType<ModalProps['overlay']>,
    },
    slide: {
      type: Boolean as PropType<ModalProps['slide']>,
    },
    fade: {
      type: Boolean as PropType<ModalProps['fade']>,
    },
  },
});
</script>

<style>
@import url('./Modal.scss');
</style>
