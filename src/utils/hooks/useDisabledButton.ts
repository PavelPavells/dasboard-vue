import { computed, ComputedRef } from 'vue';
import { SubmitButtonProps, ErrorFields } from '../types';

export default function useSubmitButton(
  state: SubmitButtonProps,
  errors: ErrorFields
): {
  isDisabled: ComputedRef<boolean>;
} {
  const isDisabled = computed(() => {
    let disabled = true;

    for (const prop in state) {
      if (!state[prop as keyof SubmitButtonProps] || errors[prop]) {
        disabled = true;

        break;
      }

      disabled = false;
    }

    return disabled;
  });

  return { isDisabled };
}
