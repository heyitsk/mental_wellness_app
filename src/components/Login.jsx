import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://login-signup-page-w7f2.onrender.com/user/login",
        userData
      );
      console.log("Login successful:", response.data);
      // Handle successful login here (e.g., redirect, set user state, etc.)
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Error submitting login:", err);
    }
  };

  return (
    <div className="absolute right-28 top-24 w-1/4 z-30">
      <div className="p-4 py-10 bg-[#AFFFBB] bg-opacity-35 rounded shadow-md border-2 ">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-3"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 my-3"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2  text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 my-10"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
