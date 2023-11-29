import { ChangeEvent, FormEvent, useState } from "react";

const AddNewRecipe = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

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
      <h1>Add New Recipe</h1>
      <form className="my-form" onSubmit={handleForm}>
        <label htmlFor="recipeName">Recipe Name</label>
        <input id="recipeName" type="text"></input>

        <label htmlFor="instructions">Instructions</label>
        <input id="instructions" type="text"></input>

        <label htmlFor="ingredients">Ingredients</label>
        <input id="ingredients" type="text"></input>

        <label htmlFor="prepTime">Prep Time</label>
        <input id="prepTime" type="text"></input>

        <label htmlFor="serves">Serves</label>
        <input id="serves" type="text"></input>

        <label htmlFor="imgUrl">Img Url</label>
        <input id="imgUrl" type="text"></input>

        <label htmlFor="category">Category</label>
        <input id="category" type="text"></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default AddNewRecipe;
