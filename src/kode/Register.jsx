import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Routes, Router } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  const [user_email, setEmail] = useState('')
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (username && user_email && user_password) {
      const response = await fetch('https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/checkUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
        })
      });

      const data = await response.json();

      if (data.exists) {
        setRegistrationStatus('Username already exists. Please choose a different username.');
      } else {
        const registerResponse = await fetch('https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/addUsers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            user_email,
            user_password,
          })
        });

        if (registerResponse.ok) {
          setRegistrationStatus('User registered successfully!');
          navigate('/');
        } else {
          setRegistrationStatus('Failed to register.');
        }
      }
    } else {
      setRegistrationStatus('Please fill in username and password.');
    }
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold mb-6">Create Account</h1>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="User Name"
              aria-label="Full name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="mt-8">
            <button
              disabled={!username || !user_email || !user_password }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Create
            </button>
          </div>
          {registrationStatus && (
            <div className="text-red-500 mt-4">{registrationStatus}</div>
          )}
        </form>
        <div className="mt-4">
          Already have an account?{' '}
          <button
            className="text-blue-900 font-mono hover:underline"
            onClick={handleLogin}
          >
            Log-in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
