import { VueElement } from 'vue';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isLoading?: boolean;
  outline?: boolean;
  width?: number;
  fullWidth?: boolean;
  icon?: VueElement;
  isDisabled?: boolean;
};
