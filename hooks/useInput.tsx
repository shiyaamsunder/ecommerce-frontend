import React, { useState, useCallback } from 'react';

export const useInput = (validateValue: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredValue(event.target.value);
    },
    []
  );

  const inputBlurHandler = useCallback(() => {
    setIsTouched(true);
  }, []);
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
