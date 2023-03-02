import { useState, useEffect } from "react";
// TODO: This component should show a list of all recipes and
// include a select element to filter recipes by category

// Task #1 create a list that will show all recipes.
// task #1.1 set recipes to state
// task #1.2 fetch recipes
// task #1.3 display recipes

// Task #2 filter recipes by category

import "./Recipes.css";

export const Recipes = () => {
  // TODO: Create State for recipes, categories, filteredRecipes, categoryChoice
  const [recipes, setRecipes] = useState([]); // useState returns an array of two items, item one: a variable, item two: is a function.
  const [categories, setCategories] = useState([]);

  // TODO: Create a useEffect that fetches recipes and categories
  useEffect(() => {
    fetch(`http://localhost:8088/recipes`)
      .then((response) => response.json())
      .then((recipeArr) => setRecipes(recipeArr));

    fetch(`http://localhost:8088/categories`)
      .then((response) => response.json())
      .then((recipeArr) => setCategories(recipeArr));
  }, []);

  // TODO: Create a useEffect that updates the filteredRecipes state if categoryChoice changes

  return (
    <>
      <h1>Recipes!</h1>
      <div id='filter-bar'>
        {/* TODO: Create a select element that shows the categories as options. Select should have an onChange function that sets the categoryChoice */}
      </div>

      <div className='recipe-container'>
        {/* TODO: Display the filteredRecipes */}
        <ol>
          {recipes.map((recipe) => (
            <li>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <div>{recipe.name}</div>
              <div>{recipe.recipeText}</div>
            </li>
          ))}
        </ol>
        {recipes.map((recipe) => (
          <>
            <div></div>
            <div></div>
          </>
        ))}
        {recipes.map((recipe) => {
          //can do stuff above the return
          return <div></div>;
        })}
      </div>
    </>
  );
};
