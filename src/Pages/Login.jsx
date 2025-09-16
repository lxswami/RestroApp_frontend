import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from "../Utils/helper";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/user/login`, { email, password });
      console.log("Login Response:", res);

      if (res.data.success && res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("userId", res.data.data._id);

        window.dispatchEvent(new Event("loginStatusChanged"));

        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}>
      <div className="bg-black/50 px-8 py-20 rounded-[5px] max-w-sm w-full text-white border border-gray-500 mt-[100px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Login To Your Account</h2>
        <p className="text-center mb-6 text-gray-300">
          Don't have an account yet?{" "}
          <Link to="/registeration" className="underline cursor-pointer">Signup</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none" required />
          <button type="submit" className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200">Login</button>
        </form>
      </div>
    </div>
  );
}
