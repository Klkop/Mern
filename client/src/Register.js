/*import React, { useContext } from 'react';
import { Mycontext } from './Mycontext';
import { useState } from 'react';

export default function Register() {
    const [formdata, setFormdata] = useState({
        name: "",
        age: "",
        uname:"",
        pass:""
    });

    const { name,setName,age,setAge,uname, setUname, pass, setPass} = useContext(Mycontext);

    function HandleChange(e) {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    function HandleSubmit() {
        if (formdata.uname ) {
            alert(`Register successfully as ${formdata.uname}`);
            setFormdata({
                name:"",
                age:"",
                uname: "",
                pass: ""
            });
        }
    }
    return (
        <div>
            <center><h1>Register</h1>
            <input name="name" type="text" value={formdata.name} placeholder="Name" onChange={HandleChange} />
            <br/>
            <input name="age" type="text" value={formdata.age} placeholder="Age" onChange={HandleChange} />
            <br />
            <input name="uname" type="text" value={formdata.uname} placeholder="username" onChange={HandleChange} />
            <br/>
            <input name="pass" type="password" value={formdata.pass} placeholder="password" onChange={HandleChange} />
            <br />
            <button onClick={HandleSubmit}>Register</button>
            </center>
        </div>
    );
}
*/
// src/Register.js
import React, { useState, useContext } from 'react';
import { MyContext } from './Mycontext1';

const Register = () => {
  const [form, setForm] = useState({ name: '', age: '', username: '', password: '' });
  const { registerUser } = useContext(MyContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(form);
    alert('Registration Successful');
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'age', 'username', 'password'].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}: </label>
          <input
            type={field === 'age' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;