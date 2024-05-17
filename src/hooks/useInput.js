import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const hasError = didEdit && !validationFn(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleLostFocus() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    handleInputChange,
    handleLostFocus,
    hasError: hasError,
  };
}
