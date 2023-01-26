import { VueElement } from 'vue';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isLoading?: boolean;
  outline?: boolean;
  width?: string;
  fullWidth?: boolean;
  icon?: VueElement;
  isDisabled?: boolean;
};
