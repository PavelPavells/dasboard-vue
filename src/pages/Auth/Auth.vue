<template>
  <Auth>
    <section class="auth">
      <form @submit="handleSubmit">
        <p class="header">Welcome back</p>
        <p class="subheader">Let&apos;s make the most of your Mercuryo experience!</p>
        <div class="wrapper-input">
          <Input
            label="Email"
            name="login"
            type="email"
            autoFocus
            inputMode="email"
            placeholder="satoshi@mercuryo.io"
            autoComplete="email"
            @input="$emit('update:login', $event.target.value)"
            v-model:value="auth.login"
            v-model:ref="inputRef"
          />
        </div>
        <div class="wrapper-input">
          <Input
            label="Password"
            name="password"
            type="password"
            inputMode="text"
            withBorder
            withIcon
            autoComplete="password"
            @input="$emit('update:password', $event.target.value)"
            v-model:value="auth.password"
            v-model:ref="inputRef"
            v-model:error="auth.error"
          />
          <Button class="forgot" @click="handleClick" outline> Forgot your password? </Button>
          <Button class="button" v-model:disabled="isSubmitDisabled" width="140px" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </section>
  </Auth>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Input, Button } from "@components/ui";
import { Auth } from "@layouts";

export default defineComponent({
  name: "AuthComponent",
  components: {
    Input,
    Button,
    Auth,
  },
  setup() {
    const auth = reactive({
      login: "",
      password: "",
      error: "",
    });

    const inputRef = ref();

    const isLoading = false;
    const isSubmitDisabled = !auth.login || !auth.password || isLoading;

    return {
      auth,
      inputRef,
      isSubmitDisabled,
    };
  },
  methods: {
    handleClick: () => {
      console.log("click");
    },
    handleSubmit: (e: Event) => {
      e.preventDefault();

      console.log("handle submit");
    },
  },
});
</script>

<style lang="scss" src="./Auth.scss"></style>
