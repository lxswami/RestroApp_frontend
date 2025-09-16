import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseurl } from "../Utils/helper";
import { useNavigate } from "react-router-dom";



export default function ReceipeAddPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: ""
    });
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAdd = async () => {
        if (!formData.title || !formData.price || !formData.description || !formData.category || !imageFile) {
            return toast.warn("⚠️ Please fill all fields and select an image!");
        }

        const token = localStorage.getItem("token");
        if (!token) return toast.error("❌ No token found. Please login first.");

        setLoading(true);
        try {
            const form = new FormData();
            Object.keys(formData).forEach((key) => form.append(key, formData[key]));
            form.append("image", imageFile);

            const res = await axios.post(`${baseurl}/create/recipe`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Recipe Add Response:", res.data);

            if (res.data.success) {
                toast.success(res.data.message || "✅ Recipe added successfully!");
                setFormData({ title: "", price: "", description: "", category: "" });
                setImageFile(null);
                navigate("/menu");
            } else {
                toast.error(res.data.message || "❌ Failed to add recipe.");
            }
        } catch (error) {
            const errorMsg =
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Something went wrong. Please try again.";
            console.error("Recipe Add Error:", errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="relative bg-cover bg-center py-12 px-4 flex justify-center items-center"
            style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 max-w-md w-full border border-gray-300 rounded-[5px] p-8 shadow-xl bg-gray-900 bg-opacity-80">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Add New Recipe</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="e.g., Cheese Burger"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="e.g., $12"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                    />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Indian Cuisine">Indian Cuisine</option>
                        <option value="North Indian Cuisine">North Indian Cuisine</option>
                        <option value="South Indian Cuisine">South Indian Cuisine</option>
                        <option value="Italian Cuisine">Italian Cuisine</option>
                    </select>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                    />
                    <textarea
                        name="description"
                        placeholder="Short description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                    ></textarea>
                </div>

                <button
                    onClick={handleAdd}
                    disabled={loading}
                    className={`mt-6 w-full cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded shadow transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? "Adding..." : "Add Recipe"}
                </button>
            </div>
        </section>
    );
}
