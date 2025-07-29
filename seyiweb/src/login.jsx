import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center font-montserrat">
      <div className="bg-white p-8 rounded-xl shadow-md align-center justify-center w-100">
        <h2 className="text-xl font-bold flex items-center pl-5 mb-2">
          <span className="w-1 h-6 bg-yellow-600 ml-8  mr-2"></span>
          CRUD OPERATIONS
        </h2>
        <h3 className="text-center text-m font-semibold mb-0 mt-7">SIGN IN</h3>
        <p className="text-center text-gray-600 text-sm mt-5 mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 opacity-50">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md text-m text-black opacity-64"
            />
          </div>

          <div className="mb-4 relative">
             <label className="block text-sm font-medium mb-1 opacity-50">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-m pr-10  text-black opacity-64"
            />
             <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-600 "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
             </button>
           </div>


          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-light  rounded-md transition duration-200"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Forgot your password?{' '}
          <a href="#" className="text-yellow-600 hover:underline">
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
