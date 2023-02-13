<template>
  <auth-layout>
    <section :class="styles.auth">
      <form>
        <p :class="styles.auth__header">Welcome back</p>
        <p :class="styles.auth__subheader">Let&apos;s make the most of your Mercuryo experience!</p>
        <div :class="styles.auth__wrapper__input">
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
        <div :class="styles.auth__wrapper__input">
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
          <Modal
            :class="styles.modal"
            v-model:isOpen="isOpenModal"
            v-model:onClick="handleToggleModal"
            hideCloseButton
          >
            <p :class="styles.auth__modal__text">
              To change your password, please contact our support
              <a href="mailto:support@mercuryo.io" :class="styles.link"> support@mercuryo.io </a>
            </p>
          </Modal>
          <Button :class="styles.auth__forgot" @click="handleToggleModal" outline>
            Forgot your password?
          </Button>
          <Button
            :class="styles.auth__button"
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
import Modal from '@components/Modal/Modal.vue';
import { useState } from '@utils/hooks';
import { useDisabledButton, useFormValidation } from '@utils/hooks';

import styles from './Auth.scss';

export default defineComponent({
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const { validateEmailField, validatePasswordField, errors } = useFormValidation();
    const { isDisabled } = useDisabledButton(state, errors);

    const getValidateLogin = () => {
      validateEmailField('email', state.email);
    };

    const getValidatePassword = () => {
      validatePasswordField('password', state.password);
    };

    const handleToggleModal = () => setIsOpenModal(!isOpenModal.value);

    return {
      styles,
      state,
      isOpenModal,
      isDisabled,
      handleToggleModal,
      getValidateLogin,
      getValidatePassword,
      errors,
    };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      return '';
    },
  },
  components: {
    AuthLayout,
    Input,
    Button,
    Modal,
  },
});
</script>
