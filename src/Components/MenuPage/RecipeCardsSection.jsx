import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { baseurl } from "../../Utils/helper";


export default function RecipeCardsSection({ activeTab }) {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseurl}/all/recipe`);
      setAllRecipes(response.data.data || []);
    } catch (error) {
      toast.error("Failed to load recipes!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const deleteRecipe = async (recipeId) => {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("You must be logged in!");

    try {
      await axios.post(
        `${baseurl}/delete/recipe`,
        { id: recipeId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Are you sure you want to delete this recipe?");
      toast.success("Recipe deleted!");
      setAllRecipes((prev) => prev.filter(item => (item.id || item._id) !== recipeId));
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete recipe!");
    }
  };

  // ✅ Filter recipes: show all if activeTab is "All", else filter by category
  const filteredRecipes =
    activeTab === "All"
      ? allRecipes
      : allRecipes.filter(recipe => recipe.category === activeTab);

  return (
    <div className="relative max-w-[1420px] mx-auto px-4 mt-10 rounded-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-100"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1074&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex justify-end mb-6">
          <Link
            to="/receipeadd"
            className="bg-gray-500 hover:bg-gray-600 cursor-pointer text-[12px] font-semibold text-white py-2 px-5 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            Add New Recipe
          </Link>
        </div>

        {loading ? (
          <p className="text-white text-center">Loading recipes...</p>
        ) : filteredRecipes.length === 0 ? (
          <p className="text-white text-center">No recipes found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredRecipes.map((item, index) => (
              <div
                key={item.id || item._id || index}
                className="bg-gray-900 bg-opacity-80 rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1 hover:text-yellow-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300 text-lg">
                      <span className="text-xl text-green-600 font-bold"> ₹ </span>{item.price}
                    </p>

                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/receipeedit/${item.id || item._id}`}
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm py-2 px-3 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteRecipe(item.id || item._id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

  );
}
