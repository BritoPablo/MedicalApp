import { useMemo, useEffect, useState } from "react";

export const useForm = (intialForm = {}, formValidations, formSubmitted) => {
  const [formState, setformState] = useState(intialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    if (formSubmitted) checkForm();
  }, [formState, formSubmitted]);

  const checkForm = ()=> {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
    return formCheckedValues
  }

  const isFormValid = () => {
    const formCheckedValues = checkForm();

    for (const formValue of Object.keys(formCheckedValues)) {
      if (formCheckedValues[formValue] !== null) {
        return false
      } else {
        return true
      };
    }
  };


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setformState(intialForm);
  };

  

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
