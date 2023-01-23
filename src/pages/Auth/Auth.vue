<template>
  <auth-layout>
    <section class="auth">
      <form>
        <p class="auth__header">Welcome back</p>
        <p class="auth__subheader">Let&apos;s make the most of your Mercuryo experience!</p>
        <div class="auth__wrapper-input">
          <Input
            label="Email"
            type="email"
            autoFocus
            placeholder="satoshi@mercuryo.io"
            autoComplete="email"
            v-model="login"
          />
        </div>
        <div class="auth__wrapper-input">
          <Input
            label="Password"
            type="password"
            withIcon
            autoComplete="password"
            v-model="password"
            :error="error"
          />
          <Button class="auth__forgot" @click="handleClick" outline>Forgot your password?</Button>
          <Button
            class="auth__button"
            :isDisabled="!login && !password"
            width="140px"
            type="submit"
          >
            Log in
          </Button>
        </div>
      </form>
    </section>
  </auth-layout>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import { Input, Button } from '@components/ui';
import { AuthLayout } from '@layouts';

export default {
  name: 'AuthComponent',
  components: {
    Input,
    Button,
    AuthLayout,
  },
  data(): { login: Ref<string>; password: Ref<string>; error: Ref<string> } {
    const login = ref('');
    const password = ref('');
    const error = ref('');

    return {
      login,
      password,
      error,
    };
  },
  methods: {
    handleClick: (): void => {
      console.log('click');
    },
    handleSubmit: (e: Event): void => {
      e.preventDefault();

      console.log('handle submit');
    },
    handleDisable: function (login: string, password: string): boolean {
      return !login.length || !password.length;
    },
  },
};
</script>

<style>
@import url('./Auth.scss');
</style>
