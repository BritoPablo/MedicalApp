import { useMemo, useEffect, useState } from "react";

export const useForm = (intialForm = {}, formValidations, formSubmitted) => {
  const [formState, setformState] = useState(intialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    if (formSubmitted) createValidators();
  }, [formState, formSubmitted]);

  const isFormValid = useMemo(() => {
    if(Object.keys(formValidation).length!==0){
      for (const formValue of Object.keys(formValidation)) {
        if (formValidation[formValue] !== null) return false;
      }
      return true;
    } else {
      return false;
    }
    
  }, [formValidation]);


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

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
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
