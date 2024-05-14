import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/apiCall";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      alert("login successfully");
      navigate("/all-products");
    } catch {
      alert(`Wrong credentials`);
    }
  };
  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-3xl">Login Page</h1>
      <form className="mt-8 flex gap-4 flex-col w-1/3" onSubmit={handleSubmit}>
        <input
          placeholder="username..."
          type="text"
          className="w-full border-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="password..."
          type="password"
          className="w-full border-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end items-end">
          <button
            type="submit"
            className="w-20 bg-blue-500 text-white font-bold p-2 mt-2 "
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
