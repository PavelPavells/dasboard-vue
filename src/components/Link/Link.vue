<template>
  <a class="link" v-bind:href="currentHref" rel="noreferrer" target="_blank">
    {{ text }}
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { LinkProps } from "./types";

export default defineComponent({
  name: "LinkComponent",
  data() {
    const currentHref =
      this.$props.link !== "/help"
        ? `https://mercuryo.io${this.$props.link}?utm_source=my.mercuryo&utm_medium=referral`
        : "https://help.mercuryo.io";

    return { currentHref };
  },
  props: {
    className: {
      type: Object as PropType<LinkProps["className"]>,
      required: false,
    },
    link: {
      type: Object as PropType<LinkProps["link"]>,
      required: true,
    },
    text: {
      type: Object as PropType<LinkProps["text"]>,
      required: true,
    },
  },
});
</script>
