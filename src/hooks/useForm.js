import {useMemo, useState} from 'react';

export const useForm = ( initialForm = {}, formValidations =  {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidaton] = useState({})


    const onInputChange = ({ target }) => {


        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const isFormValid = useMemo( ( )  => {


        for (const formValue of Object.keys( formValidation )) {
            if (formValidation[formValue] !== null) return false
        }

        return true;
    },[formValidation])

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidaton,
        isFormValid
    }
}