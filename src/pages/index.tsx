import NavBar from "@/components/navbar";
import Image from "next/image";
import { type } from "os";
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  category: Category[];
  img_url: string;
  instructions: string;
  ingredients: string;
  prep_time: number;
  serves: number;
}

interface Category {
  id: number;
  name: string;
  img_url: string;
}
// type CategoryName = "all" | "breakfast" | "lunch" | "dessert";

const Recipes = () => {
  const [recipeFilter, setRecipeFilter] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | "">("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3002/recipes");
      const categoriesResponse = await fetch(
        "http://127.0.0.1:3002/categories"
      );
      const recipeData = await response.json();
      const categoriesData = await categoriesResponse.json();

      console.log(recipeData);
      setRecipes(recipeData);
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category: Category) => {
    setRecipeFilter("");
    setSelectedCategory(category.id === 0 ? "all" : category.id.toString());
  };

  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) =>
          recipe.category.some(
            (category) => category.id === parseInt(selectedCategory)
          )
        );

  console.log(recipes);

  return (
    <div>
      <div className="header-nav-login-mp">
        <NavBar />

        <header>
          <h1>Home Chef Recipes</h1>
        </header>
      </div>

      <main className="container">
        <div className="recipe">
          <h3>Recipes</h3>
          <div className="aside-list-items">
            <div
              className="asideCat"
              onClick={() =>
                handleCategoryClick({ id: 0, name: "all", img_url: "" })
              }
            >
              all
            </div>
            {categories.map((category) => (
              <div
                className="asideCat"
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-list">
          <input
            className="search-bar"
            value={recipeFilter}
            onChange={(event) => setRecipeFilter(event.target.value)}
            type="text"
            placeholder="Search for Recipes ..."
          />

          {/* <ul className="recipe-card"> */}
          {filteredRecipes
            .filter((recipe) => {
              if (
                recipe.name.toLowerCase().includes(recipeFilter.toLowerCase())
              ) {
                return true; // Keep it
              } else {
                return false; // Remove it
              }
            })
            .map((recipe) => {
              return (
                <div className="recipe-card" key={recipe.id}>
                  {/* <Image src="/" /> */}
                  <div className="recipe-card-picture">
                    <Image
                      className="image"
                      src={recipe.img_url}
                      alt={recipe.name}
                      width={200}
                      height={170}
                    />
                  </div>
                  <div className="recipe-card-details">
                    <h3>{recipe.name}</h3>
                    {/* <p>{recipe.category.name}</p> */}

                    {recipe.category.map((category) => (
                      <div className="catname">{category.name}</div>
                    ))}
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                  </div>
                </div>
              );
            })}
          {/* </ul> */}
        </div>
        <div className="button">
          <h2>Add New Recipe</h2>
        </div>
      </main>
    </div>
  );
};

export default Recipes;
