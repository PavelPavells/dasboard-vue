import { InputHTMLAttributes, VueElement } from "vue";

export interface InputProps extends InputHTMLAttributes {
  className?: string;
  label?: string;
  error?: VueElement | boolean;
  isLoading?: boolean;
  tooltipContent?: VueElement;
  tooltipClassName?: string;
  button?: VueElement;
  icon?: VueElement;
  withIcon?: boolean;
  defaultValue?: string;
  onChange: (event: Event) => void;
  mask?: string;
  showMask?: boolean;
  autoComplete?: string;
  enterKeyHint?: InputHTMLAttributes;
  withBorder?: boolean;
  hasError?: boolean;
  type?: string;
}
