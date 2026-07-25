import React, { useState } from "react";
import recipiesData from "./recipiesData";

const ratings = [4.0, 4.3, 4.5, 4.7, 4.9];

function FilterRecipies() {
  const [selectedRating, setSelectedRating] = useState(4.0);
  const [cartCount, setCartCount] = useState(0);

  // Filter recipes
  const filteredRecipes = recipesData.filter(
    (recipe) => recipe.rating >= selectedRating
  );

  // Average rating
  const averageRating =
    filteredRecipes.length === 0
      ? "0.00"
      : (
          filteredRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) /
          filteredRecipes.length
        ).toFixed(2);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1>🍽️ Recipe Explorer</h1>

      <div className="top">
        <div>
          <label htmlFor="rating-filter">Filter by Rating:</label>

          <select
            id="rating-filter"
            value={selectedRating}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
          >
            {ratings.map((rating) => (
              <option key={rating} value={rating}>
                {rating.toFixed(1)}+
              </option>
            ))}
          </select>
        </div>

        <h2>🛒 Cart Items: {cartCount}</h2>
      </div>

      <h2>
        Average Rating: {averageRating} ({filteredRecipes.length} recipes)
      </h2>

      <div className="recipes">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.name} />

            <h3>{recipe.name}</h3>

            <p>{recipe.cuisine}</p>

            <p>⭐ {recipe.rating}</p>

            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterRecipies;