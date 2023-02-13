<template>
  <div class="wrapper-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  data() {
    const isCompleteScroll = ref(false);

    return { isCompleteScroll };
  },
  methods: {
    handleScroll(event: Event) {
      const { clientHeight, scrollHeight, scrollTop } = event.currentTarget as HTMLDivElement;
      this.isCompleteScroll = scrollHeight - clientHeight - 300 < scrollTop;
    },
  },
  provide() {
    return {
      handleScroll: this.handleScroll,
    };
  },
});
</script>
