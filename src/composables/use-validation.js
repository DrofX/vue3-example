/* eslint-disable no-console */
import { ref, watch } from '@vue/composition-api';
import Validator from 'validatorjs';

export default function useValidation(modelRef, rules) {
  const valid = ref(true);
  const errors = ref({});

  const validate = () => {
    const validator = new Validator(modelRef.value, rules, {
      required: 'The :attribute is required',
    });

    valid.value = validator.passes();
    errors.value = validator.errors.errors;
  };

  const reset = () => {
    valid.value = true;
    errors.value = {};
  };

  watch(
    modelRef,
    () => {
      reset();
    },
    { deep: true, lazy: true }
  )

  return {
    validate,
    reset,
    valid,
    errors,
  };
}
