//import logo from './logo.svg';
/*import './App.css';
var x={"Name":"Raju","age":20,"village":"tham"}

function App() {
  return (
    <div>
      <h1>{x["age"]}</h1>
      <h2>{x["Name"]}</h2>
    </div>
  );
}
export default App;
*/
import React from 'react';
import { MyProvider } from './Mycontext1';
import Register from './Register1';
import Login from './Login2';

const App = () => (
  <MyProvider>
    <div>
      <h1>Register</h1>
      <Register />
      <h1>Login</h1>
      <Login />
    </div>
  </MyProvider>
);

export default App;
