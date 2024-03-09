import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const request = await axios({
        method: "post",
        url: "http://localhost:3000/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ username, password }),
        withCredentials: true,
      });

      const from = location.state?.from || "/";
      navigate(from);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="m-auto max-w-96 flex items-center justify-center my-60">
        <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded shadow-md w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} className="border p-1 rounded text-black" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="border p-1 rounded text-black" />
          </div>
          <button type="submit" className="bg-blue-800 p-3 rounded w-full hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
