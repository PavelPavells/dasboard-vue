import { readonly, ref, Ref, DeepReadonly, reactive, UnwrapRef } from 'vue';

export function useState<T>(
  initialState: T
): [Readonly<Ref<DeepReadonly<UnwrapRef<T>>>>, (newState: UnwrapRef<T>) => void] {
  const state = ref(initialState);

  const setState = (newState: UnwrapRef<T>) => {
    state.value = newState;
  };

  return [readonly(state), setState];
}

export function useMultipleState<T>(initialState: T): [any, (newState: any) => void] {
  const state = reactive({ initialState });

  const setState = (newState: T) => (prevState: T) => ({ ...prevState, newState });

  return [readonly(state), setState];
}

export default { useState, useMultipleState };
