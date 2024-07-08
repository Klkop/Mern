import React, { useState, createContext } from 'react';
import Login from './Login'; // Adjust the import path if necessary
import Profile from './Profile';
import TodoList from './TodoList';
export const FormContext = createContext("");
function Fields(props) {
    function handleChange(e) {
        const { name, value } = e.target;
        props.setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.fieldName}>
                {props.fieldName}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                name={props.fieldName}
                type={props.fieldType}
                value={props.value}
                onChange={handleChange}
                placeholder={`Enter your '${props.fieldName}`} // Corrected template string
            />
        </div>
    );
}

export default function Register() {
    const [form, setForm] = useState({
        Name: '',
        Age: '',
        Email: '',
        Password: '',
    });
    const [localDB, setDB] = useState([]);

    function handleSubmit() {
        
        setDB([...localDB, form]);
        setForm({
            Name: '',
            Age: '',
            Email: '',
            Password: ''
        }
    );
        

    }

    return (
        <FormContext.Provider value={[localDB, setDB]}>
            <div>
                <form className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
                    <h1 className="text-xl text-center font-bold font-mono">Register</h1>
                    <Fields
                        fieldName="Name"
                        fieldType="text"
                        value={form.Name}
                        setForm={setForm}
                    />
                    <Fields
                        fieldName="Age"
                        fieldType="number"
                        value={form.Age}
                        setForm={setForm}
                    />
                    <Fields
                        fieldName="Email"
                        fieldType="email"
                        value={form.Email}
                        setForm={setForm}
                    />
                    <Fields
                        fieldName="Password"
                        fieldType="password"
                        value={form.Password}
                        setForm={setForm}
                    />
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                       
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-bold">Form Data:</h2>
                        <table className="table-auto">
                            <thead className="bg-blue-200">
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Age</th>
                                    <th className="p-2">Email</th>
                                </tr>
                            </thead>
                            <tbody className="bg-grey-300">
                                {localDB.map((Key, index) => (
                                    <tr key={index}>
                                        <td className="p-2">{Key.Name}</td>
                                        <td className="p-2">{Key.Age}</td>
                                        <td className="p-2">{Key.Email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <Login/>
            <TodoList/>
        </FormContext.Provider>
    );
}


