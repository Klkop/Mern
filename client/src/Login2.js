// src/Login.js
import React, { useState, useContext } from 'react';
import { MyContext } from './Mycontext1';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const { users } = useContext(MyContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === form.username && u.password === form.password);
    alert(user ? 'Login Successful' : 'Login Failed');
  };

  return (
    <form onSubmit={handleSubmit}>
      {['username', 'password'].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}: </label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;