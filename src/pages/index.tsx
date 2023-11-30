//comment
// import NavBar from '@/component/navBar';
// import Link from 'next/link';
// import recipes from '../data/recipes.json';

// import categories from '../data/categories.json';

// const Home = () => {
//   // fetch recepies from endpoint /recipes
//   // const recepies

//   return (
//     <div>
//       <h1>Home Chef Recipes</h1>
//       <NavBar />
//       <section>
//         <input
//           type="text"
//           placeholder="Search for Recipes ..."
//         />
//         <div className="list-items">
//           {recipes.map((recipe) => {
//             return <li key={recipe.id}>{recipe.name}</li>;
//           })}
//         </div>
//       </section>
//       <section>
//         <aside>
//           <h3>Recipes</h3>
//           <div className="aside-list-items">
//             {categories.map((category) => {
//               return <li key={category.id}>{category.name}</li>;
//             })}
//           </div>
//         </aside>
//       </section>
//       <h2>Add New Recipe</h2>
//     </div>
//   );
// };

// export default Home;

import NavBar from '@/components/navbar';
import { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  category: number[];
  img_url: string;
  instructions: string;
  ingredients: string;
  prep_time: number;
  serves: number;
}

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:3002/recipes');

      const recipeData = await response.json();
      console.log(recipeData);
      setRecipes(recipeData);
    };
    fetchData();
  }, []);

  console.log(recipes);

  return (
    <div>
      <h1>Home Chef Recipes</h1>
      <NavBar />
      <section>
        <input
          type="text"
          placeholder="Search for Recipes ..."
        />
        <div className="list-items">
          {recipes.map((recipe) => {
            return <li key={recipe.id}>{recipe.name}</li>;
          })}
        </div>
      </section>
      <section>
        <aside>
          <h3>Recipes</h3>
          {/* <div className="aside-list-items">
            //{categories.map((category) => {
              return <li key={category.id}>{category.name}</li>;
            })}
          </div> */}
        </aside>
      </section>
      <h2>Add New Recipe</h2>
    </div>
  );
};

export default Recipes;
