import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext1';

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