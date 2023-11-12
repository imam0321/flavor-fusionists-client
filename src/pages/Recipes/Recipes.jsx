import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";


const Recipes = () => {
  const chef = useLoaderData();
  const { recipes } = chef;
  return (
    <div>
      <h1>this is recipes {recipes.length}</h1>
      { 
        recipes.map(recipe => <Recipe 
          key={recipe._id}
          recipe={recipe}
          ></Recipe>)
      }
    </div>
  );
};

export default Recipes;