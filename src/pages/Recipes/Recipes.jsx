import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";


const Recipes = () => {
  const chef = useLoaderData();

  const { recipes } = chef;
  return (
    <div className="my-10 mx-20">
      { 
        recipes.map(recipe => <Recipe 
          key={recipe.recipe_id}
          recipe={recipe}
          ></Recipe>)
      }
    </div>
  );
};

export default Recipes;