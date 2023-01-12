import { useState } from "react"


export const useForm = ( intialForm = {} ) => {
    const [formState, setformState] = useState(intialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setformState(intialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
