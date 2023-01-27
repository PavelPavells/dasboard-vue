<template>
  <auth-layout>
    <section class="auth">
      <form @submit.prevent="handleSubmit">
        <p class="auth__header">Welcome back</p>
        <p class="auth__subheader">Let&apos;s make the most of your Mercuryo experience!</p>
        <div class="auth__wrapper-input">
          <Input
            label="Email"
            type="email"
            autoFocus
            placeholder="satoshi@mercuryo.io"
            autoComplete="login"
            v-model:value="state.login"
            v-model:error="errors.login"
            @blur="getValidateLogin"
            @keyup="getValidateLogin"
          />
        </div>
        <div class="auth__wrapper-input">
          <Input
            label="Password"
            type="password"
            withIcon
            autoComplete="password"
            v-model:value="state.password"
            v-model:error="errors.password"
            @blur="getValidatePassword"
            @keyup="getValidatePassword"
          />
          <Button class="auth__forgot" @click="handleOpenTip" outline>Forgot your password?</Button>
          <Button class="auth__button" :isDisabled="isDisabled" width="140px" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </section>
  </auth-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Input, Button } from '@components/ui';
import { AuthLayout } from '@layouts';
import { useDisabledButton, useFormValidation } from '@utils/hooks';

export default defineComponent({
  setup() {
    const state = reactive({
      login: '',
      password: '',
    });

    const { validateEmailField, validatePasswordField, errors } = useFormValidation();
    const { isDisabled } = useDisabledButton(state, errors);

    const getValidateLogin = () => {
      validateEmailField('login', state.login);
    };

    const getValidatePassword = () => {
      validatePasswordField('password', state.password, 10);
    };

    return { state, isDisabled, getValidateLogin, getValidatePassword, errors };
  },
  methods: {
    handleSubmit() {
      console.log('click');
    },
    handleOpenTip() {
      console.log('tip');
    },
  },
  components: {
    Input,
    Button,
    AuthLayout,
  },
});
</script>

<style>
@import url('./Auth.scss');
</style>
