import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);




/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from'./Components/Navbar'
//import Header from './Header';
//import Register from './Components/Register';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
//import Navbar from './Components/navbar';
// Root element from index.html
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> 
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/register" element={<h1>Register</h1>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/about" element={<h1>About</h1>}/>
      </Routes>
    </Router>
  </div>
);*/
