import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ReceipeEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState("");

  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageFileRef = useRef();

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseurl}/update/recipe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) throw new Error("Failed to fetch recipe");
        const resData = await response.json();
        const data = resData.data || {};

        if (titleRef.current) titleRef.current.value = data.title || "";
        if (priceRef.current) priceRef.current.value = data.price || "";
        if (descriptionRef.current) descriptionRef.current.value = data.description || "";
        if (categoryRef.current) categoryRef.current.value = data.category || "";
        setImagePreview(data.image || "");
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
        toast.error("Failed to load recipe. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to update a recipe.");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", titleRef.current?.value.trim() || "");
    formData.append("price", priceRef.current?.value.trim() || "");
    formData.append("description", descriptionRef.current?.value.trim() || "");
    formData.append("category", categoryRef.current?.value.trim() || "");

    const file = imageFileRef.current?.files[0];
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await fetch("https://q1kb1wwp-9000.inc1.devtunnels.ms/update/recipe", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Failed to update recipe.");
      }

      toast.success("Recipe updated successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error("Failed to update recipe:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
    }
  };

  if (loading) return <p className="text-center text-white">Loading recipe...</p>;

  return (
    <section
      className="relative bg-cover bg-center py-12 px-4 flex justify-center items-center"
      style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}
    >
      <div className="border border-gray-500 rounded-md flex items-center justify-center px-20 py-10">
        <div className="rounded-xl shadow-xl w-full">
          <h2 className="text-3xl text-white font-bold mb-6 text-center">Edit Recipe</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Title</label>
              <input
                type="text"
                placeholder="e.g., Cheese Burger"
                ref={titleRef}
                className="w-full px-4 py-2 rounded border text-white bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Price</label>
              <input
                type="text"
                ref={priceRef}
                placeholder="e.g., $12"
                className="w-full px-4 py-2 rounded border text-white bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Category</label>
              <select
                ref={categoryRef}
                className="w-full px-4 py-2 rounded border text-white bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Indian Cuisine">Indian Cuisine</option>
                <option value="North Indian Cuisine">North Indian Cuisine</option>
                <option value="South Indian Cuisine">South Indian Cuisine</option>
                <option value="Italian Cuisine">Italian Cuisine</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Description</label>
              <textarea
                ref={descriptionRef}
                rows={4}
                placeholder="Write description..."
                className="w-full px-4 py-2 rounded border text-white bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Image File</label>
              <input
                type="file"
                accept="image/*"
                ref={imageFileRef}
                onChange={handleFileChange}
                className="w-full border cursor-pointer rounded-lg p-2 text-white bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
            >
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
