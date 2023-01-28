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
            autoComplete="login"
            v-model:value="state.email"
            v-model:error="errors.email"
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
          <Button class="auth__forgot" @click.prevent="handleOpenTip" outline
            >Forgot your password?</Button
          >
          <Button
            class="auth__button"
            type="submit"
            :isDisabled="isDisabled"
            :width="140"
            :isLoading="isLoading"
            @click.prevent="handleSubmit"
          >
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
      email: '',
      password: '',
    });

    const { validateEmailField, validatePasswordField, errors } = useFormValidation();
    const { isDisabled } = useDisabledButton(state, errors);

    const getValidateLogin = () => {
      validateEmailField('email', state.email);
    };

    const getValidatePassword = () => {
      validatePasswordField('password', state.password);
    };

    return { state, isDisabled, getValidateLogin, getValidatePassword, errors };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log('click');
      this.isLoading = !this.isLoading;
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
