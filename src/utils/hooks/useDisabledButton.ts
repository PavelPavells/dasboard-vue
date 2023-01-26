import { computed, ComputedRef } from 'vue';
import { SubmitButtonProps } from '../types';

export default function useSubmitButton(state: any): {
  isDisabled: ComputedRef<boolean>;
} {
  const isDisabled = computed(() => {
    let disabled = true;

    for (const prop in state) {
      if (!state[prop]) {
        disabled = true;

        break;
      }

      disabled = false;
    }

    return disabled;
  });

  return { isDisabled };
}
