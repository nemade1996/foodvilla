import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useReducer,useDispatch } from 'react-redux';
import { login, logout } from '../utils/loginSlice';

const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

   const handleLogin = () => {
    if (email === 'neha@gmail.com' && password === '12345') {
      dispatch(login(email));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center justify-center p-28 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        {isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user}!</h1>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
              className="mt-4 bg-[#df1006] text-white py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login