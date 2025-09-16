import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseurl } from "../Utils/helper";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            toast.error("All fields are required!");
            return;
        }

        try {
            const res = await axios.post(`${baseurl}/user/register`, formData, {
            });
            console.log("Registration Response:", res.data);

            if (res.data?.success) {
                toast.success(res.data.message || "Registration successful!");
                navigate("/login");
            } else {
                toast.error(res.data.message || "Registration failed. Please try again.");
            }
        } catch (err) {
            let errorMsg = "Registration failed. Please try again.";
            if (err.response) errorMsg = err.response.data?.message || errorMsg;
            else if (err.request) errorMsg = "No response from server. Please check your connection.";
            else errorMsg = err.message || errorMsg;

            toast.error(errorMsg);
            console.error("Registration Failed:", errorMsg, err);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}
        >
            <div className="border border-gray-500 p-8 rounded-md max-w-sm w-full text-white">
                <h2 className="text-2xl font-bold mb-2 text-center">Create Your Account</h2>
                <p className="text-center mb-6 text-gray-300">
                    Already have an account?{" "}
                    <Link to="/login" className="underline cursor-pointer text-blue-700">Login</Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mb-4 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mb-4 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mb-4 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
