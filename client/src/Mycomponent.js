import React, { useContext } from 'react';
import { Mycontext } from './Mycontext';
import { useState } from 'react';

export default function Mycomponent() {
    const [formdata, setFormdata] = useState({
        uname: "",
        pass: ""
    });

    const { uname, setUname, pass, setPass } = useContext(Mycontext);

    function HandleChange(e) {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    function HandleSubmit() {
        if (formdata.uname ) {
            alert(`Logged in successfully as ${formdata.uname}`);
            setFormdata({
                uname: "",
                pass: ""
            });
        }
    }
    return (
        <div>
            <center><h1>Login</h1>
            <input name="uname" type="text" value={formdata.uname} placeholder="username" onChange={HandleChange} />
            <br/>
            <input name="pass" type="password" value={formdata.pass} placeholder="password" onChange={HandleChange} />
            <br />
            <button onClick={HandleSubmit}>Submit</button>
            </center>
        </div>
    );
}
