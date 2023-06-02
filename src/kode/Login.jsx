import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        user_password,
      }),
    });

    if (response.ok) {
      setLoginStatus(alert('Login Succesfull'));
      navigate("/jamur")
    } else {
      setLoginStatus(alert('Invalid email or password'));
    }
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              className="border border-gray-300 p-2 rounded w-full"
              type="text"
              placeholder="Username"
              aria-label="name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-gray-300 p-2 rounded w-full"
              type="password"
              placeholder="Password"
              aria-label="pass"
              value={user_password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mb-4 text-center">
            <p>OR</p>
          </div>
          <div>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer w-full"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
