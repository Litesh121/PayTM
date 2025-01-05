import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup.jsx";
import { Signin } from './pages/Signin.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { SendMoney } from './pages/SendMoney.jsx';
import { UserPage } from './pages/UserPage.jsx';
import { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1")
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error connecting to the backend!", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="container mx-auto p-4 min-h-screen">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img src="/logo.jpg" alt="PayTM Logo" className="logo mr-4" />
            <h1 className="text-4xl font-bold">Welcome to PayTM App</h1>
          </div>
          <div>
            {username && <p className="text-lg">Welcome, {username}!</p>}</div>
        </header>
        <div className="card bg-white text-gray-800 shadow-md rounded-lg p-6">
         
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link to="/signup" className="btn">Signup</Link></li>
              <li><Link to="/signin" className="btn">Signin</Link></li>
              <li><Link to="/dashboard" className="btn">Dashboard</Link></li>
              <li><Link to="/send" className="btn">Send Money</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
          <Route path='/user/:userId' element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;