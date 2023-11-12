import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
  const {
    recipe_name,
    recipe_description,
    recipe_rating,
    ingredients,
    recipe_picture,
  } = recipe;
  
  return (
    <div className='my-5'>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img
            src={recipe_picture}
            className="h-96 w-96"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{recipe_name}</h2>
          <p>{recipe_description}</p>
          <h1 className='font-bold text-xl'>Recipe Ingredient :</h1>
          {
            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
          }
          <div className="flex items-center">
            <p className='font-semibold text-yellow-500'>Rating: {recipe_rating} </p>
              <Rating style={{ maxWidth: 100 }} className="mr-1" value={recipe_rating} readOnly></Rating>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
