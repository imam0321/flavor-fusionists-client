

const Recipe = ({ recipe }) => {
  const { recipe_id, recipe_name, recipe_description, recipe_rating, ingredients, recipe_picture } = recipe;
  return (
    <div>
      <h1>{recipe_id}</h1>
    </div>
  );
};

export default Recipe;