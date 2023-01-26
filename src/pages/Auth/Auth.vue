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
            v-model:value="state.login"
          />
        </div>
        <div class="auth__wrapper-input">
          <Input
            label="Password"
            type="password"
            withIcon
            autoComplete="password"
            v-model:value="state.password"
            v-model:error="error"
          />
          <Button class="auth__forgot" outline>Forgot your password?</Button>
          <Button
            class="auth__button"
            :isDisabled="isDisabled"
            width="140px"
            type="submit"
            @click.prevent="handleClick"
          >
            Log in
          </Button>
        </div>
      </form>
    </section>
  </auth-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { Input, Button } from '@components/ui';
import { AuthLayout } from '@layouts';
import { useDisabledButton } from '@utils/hooks';

export default defineComponent({
  setup() {
    const state = reactive({
      login: '',
      password: '',
    });

    const error = computed(() => {
      return state.login === '' ? '' : '';
    });

    const { isDisabled } = useDisabledButton(state);

    return { state, isDisabled, error };
  },
  computed: {
    hasButtonDisable(): boolean {
      return !this.state.login || !this.state.password;
    },
  },
  methods: {
    handleClick(): void {
      console.log('click');
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
