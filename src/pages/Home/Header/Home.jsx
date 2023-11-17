import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";


const Home = () => {
  const chefs = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10 mx-20">
      {
        chefs.map(chef => <Chef 
          key={chef.chef_id} 
          chef={chef}
          ></Chef>)
      }
    </div>
  );
};

export default Home;