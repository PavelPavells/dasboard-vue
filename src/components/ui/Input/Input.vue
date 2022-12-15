<template>
  <div class="wrapper">
    <input type="text" :model="text" :value="text" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponent",
  setup() {
    const handleChange = (event: Event) => {
      console.log((event.target as HTMLInputElement).value);
    };

    return { handleChange };
  },
  props: {
    text: String,
  },
});
</script>

<style lang="scss">
@import url("./Input.scss");
</style>
