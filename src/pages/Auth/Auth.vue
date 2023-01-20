<template>
  <auth-layout>
    <section class="Auth">
      <form>
        <p class="header">Welcome back</p>
        <p class="subheader">Let&apos;s make the most of your Mercuryo experience!</p>
        <div class="wrapper-input">
          <Input
            label="Email"
            type="email"
            autoFocus
            placeholder="satoshi@mercuryo.io"
            autoComplete="email"
            v-model="login"
          />
        </div>
        <div class="wrapper-input">
          <Input
            label="Password"
            type="password"
            withIcon
            autoComplete="password"
            v-model="password"
            :error="error"
          />
          <Button class="forgot" @click="handleClick" outline>Forgot your password?</Button>
          <Button class="button" :disabled="!login || !password" width="140px" type="submit"> Log in </Button>
        </div>
      </form>
    </section>
  </auth-layout>
</template>

<script lang="ts">
//@ts-nocheck
import { ref } from 'vue';
import { Input, Button } from '@components/ui';
import { AuthLayout } from '@layouts';

export default {
  name: 'Auth',
  components: {
    Input,
    Button,
    AuthLayout,
  },
  setup(): { login: string; password: string; error: string } {
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
    handleClick: () => {
      console.log('click');
    },
    handleSubmit: (e: Event) => {
      e.preventDefault();

      console.log('handle submit');
    },
    isDisable: (login: string, password: string): boolean => !login || !password,
  },
};
</script>

<style lang="scss" src="./Auth.scss">

</style>
