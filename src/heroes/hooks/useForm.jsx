import React, { useState } from 'react'

export const useForm = (initialState = {} ) => {

    const [formState, setformState] = useState(initialState);


    const onInputChange =({target})=>{
        setformState({
            ...formState,
            [target.name] : target.value
        })

    }

    const onResetSubmit = ()=>{
        setformState(initialState);
        

    }



  return {
    ...formState,
    formState,
    onInputChange,
    onResetSubmit
  }
}
