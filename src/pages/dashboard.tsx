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

const Dashboard = () => {
  const [recipeFilter, setRecipeFilter] = useState('');
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

  return (
    <div>
      <h1>Dashboard</h1>

      <NavBar />
      <div></div>
    </div>
  );
};

export default Dashboard;
