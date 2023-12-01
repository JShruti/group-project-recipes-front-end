import NavBar from "@/components/navbar";
import { ChangeEvent, FormEvent, useState } from "react";

type Category = "breakfast" | "lunch" | "dinner" | "dessert";

const AddNewRecipe = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [category, setCategories] = useState<Category>("breakfast");

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    const recipeNameFromForm = event.currentTarget.recipeName.value;
    const instructionsFromForm = event.currentTarget.instructions.value;
    const ingredientsFromForm = event.currentTarget.ingredients.value;
    const prepTimeFromForm = event.currentTarget.prepTime.value;
    const servesFromForm = event.currentTarget.serves.value;
    const imgUrlFromForm = event.currentTarget.imgUrl.value;
    const categoryFromForm = event.currentTarget.category.value;

    // console.log(`name was ${recipeNameFromForm}`);
    // console.log(`${instructionsFromForm}`);
    // console.log(`${ingredientsFromForm}`);
    // console.log(`${prepTimeFromForm}`);
    // console.log(`${servesFromForm}`);
    // console.log(`${imgUrlFromForm}`);
    // console.log(`${categoryFromForm}`);

    const postResponce = await fetch("http://127.0.0.1:3002/recipes", {
      method: "POST",
      body: JSON.stringify({
        recipeName: recipeNameFromForm,
        instructions: instructionsFromForm,
        ingredients: ingredientsFromForm,
        prepTime: prepTimeFromForm,
        serves: servesFromForm,
        imgUrl: imgUrlFromForm,
        category: categoryFromForm,
      }),
    });
    const postData = await postResponce.json();
    console.log(postData);
  };

  return (
    <>
      <div className="header-nav-login-ar">
        <NavBar />
        <header>
          <h1>Add New Recipe</h1>
        </header>
      </div>

      <form className="form" onSubmit={handleForm}>
        <label htmlFor="recipeName">Recipe Name</label>
        <input id="recipeName" type="text"></input>

        <label htmlFor="instructions">Instructions</label>
        <input id="instructions" type="text"></input>

        <label htmlFor="ingredients">Ingredients</label>
        <input id="ingredients" type="text"></input>

        <label htmlFor="prepTime">Prep Time</label>
        <input id="prepTime" type="number"></input>

        <label htmlFor="serves">Serves</label>
        <input id="serves" type="number"></input>

        <label htmlFor="imgUrl">Img Url</label>
        <input id="imgUrl" type="text"></input>

        <input type="string" name="category" id="category" />
        <div className="categoriesOptions">
          <p>{category}</p>
          {["breakfast", "lunch", "dinner", "dessert"].map((str) => {
            return <span key={str}>◻︎</span>;
          })}
        </div>

        {/* <label htmlFor="category">Category</label>
        <input id="category" type="checkbox">
          Breakfast
        </input>
        <input id="category" type="checkbox">
          Lunch
        </input>
        <input id="category" type="checkbox">
          Dinner
        </input>
        <input id="category" type="checkbox">
          Dessert
        </input> */}

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>
    </>
  );
};
export default AddNewRecipe;
