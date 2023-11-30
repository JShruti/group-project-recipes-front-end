import AddComments from '@/components/add-comment';
import GetComments from '@/components/get-comment';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  category: number[];
  img_url: string;
  instructions: string;
  ingredients: String;
  prep_time: number;
  serves: number;
  Comment: string[];
}

const Recipes = () => {
  const router = useRouter();

  const idFromUrl = router.query.id as string;
  const [getRecipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (idFromUrl === 'undefined' || isNaN(parseInt(idFromUrl as string, 10))) {
      return;
    }
    console.log(idFromUrl);

    const fetchData = async () => {
      const response = await fetch(
        `http://127.0.0.1:3002/recipes/${idFromUrl}`
      );

      const data = await response.json();
      setRecipe(data);
    };

    fetchData();
  }, [idFromUrl]);

  return (
    <div>
      {getRecipe !== null ? (
        <div>
          <h1>{getRecipe.name}</h1>
          <h2>{getRecipe.category}</h2>
          <div>
            <h3>{getRecipe.name}</h3>
            <h4>Instructions</h4>
            <p>{getRecipe.instructions}</p>
            <h4>Ingredients</h4>
            <p>{getRecipe.ingredients}</p>
            <h4>Serves</h4>
            <p>{getRecipe.serves}</p>
            <h4>Prep Time</h4>
            <p>{getRecipe.prep_time}</p>
          </div>
          <AddComments recipeID={idFromUrl} />
          <GetComments recipeID={idFromUrl} />
        </div>
      ) : (
        <div>{idFromUrl === undefined ? 'Loading...' : 'Recipe not found'}</div>
      )}
    </div>
  );
};
export default Recipes;
