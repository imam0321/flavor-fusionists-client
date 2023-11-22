import { FaThumbsUp } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const Chef = ({ chef }) => {

  const { chef_id, chef_picture, chef_name, description, rating, experience, likes, } = chef;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={chef_picture}
            className="h-96 w-96"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-7">
          <h2 className="card-title">{chef_name}</h2>
          <p>{description}</p>
          <h4 className="font-semibold">Years of Experience : {experience}</h4>
          <div className="flex justify-between items-center text-lg text-slate-800">
            <div className="flex items-center">
              <Rating style={{ maxWidth: 100 }} className="mr-1" value={rating} readOnly></Rating>
              {rating}
            </div>
            <div className="flex items-center">
              <FaThumbsUp className="mr-1"></FaThumbsUp>
              {likes}
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chefs/chef/recipes/${chef_id}`} className="btn btn-neutral">View Recipes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
