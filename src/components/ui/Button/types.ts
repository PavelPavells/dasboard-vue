import { VueElement } from 'vue';

export type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  outline?: boolean;
  width?: string;
  fullWidth?: boolean;
  icon?: VueElement;
  isDisabled?: boolean;
};
