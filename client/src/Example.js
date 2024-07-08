import React, { useState } from 'react';
import { Mycontext } from './Mycontext';
import Mycomponent from './Mycomponent';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Register';

// Provider->produces the data / props
export default function Example() {
    // provide
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div>
            <Mycontext.Provider value={{ name,setName,age,setAge,uname, setUname, pass, setPass }}>
                <Mycomponent />
                {/** you can add as many components provider will provide all the given components */}
            </Mycontext.Provider>
        </div>
    );
}
