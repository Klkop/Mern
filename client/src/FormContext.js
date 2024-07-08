import { createContext, useState } from 'react';
import React from 'react';

export const FormContext= createContext;
export const FormProvider = ({childComp})=>{
    const[localDB,setDB] = useState([])
    return(
        <FormContext.Provider
        value={{localDB,setDB}}>
            {childComp}
        </FormContext.Provider>
    );
    

}