import { InputHTMLAttributes, VueElement } from "vue";

export interface InputProps extends InputHTMLAttributes {
  className?: string;
  label?: string;
  error?: string | boolean;
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
  type?: string;
  name?: string;
  id: string;
  modelValue: string;
}
