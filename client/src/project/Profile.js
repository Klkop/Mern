import React, { useState, useContext } from "react";
import { FormContext } from "./Register";
import '../index.css';

export default function Profile() {
  const formContext = useContext(FormContext);
  const [newPassword, setNewPassword] = useState("");

  // Check if formContext is properly provided and contains localDB
  const localDB = formContext ? formContext[0] : [];
  const setLocalDB = formContext ? formContext[1] : null;

  const userEmail = localStorage.getItem("userEmail");

  const user = localDB.find(user => user.Email === userEmail);

  function handlePasswordChange(e) {
    setNewPassword(e.target.value);
  }

  function updatePassword() {
    const updatedDB = localDB.map(user => {
      if (user.Email === userEmail) {
        return { ...user, Password: newPassword };
      }
      return user;
    });
    setLocalDB(updatedDB);
    setNewPassword("");
    alert("Password updated successfully");
  }

  function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "/login"; // Redirect to the login page
  }

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
      <h1 className="text-xl text-center font-bold font-mono">Profile</h1>
      <p>Email: {user.Email}</p>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
          New Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={updatePassword}
        disabled={!setLocalDB} // Disable button if setLocalDB is not available
      >
        Update Password
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
