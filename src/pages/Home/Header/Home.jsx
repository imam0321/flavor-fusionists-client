import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";
import Carousel from "../../../components/Carousel";


const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <>
    <Carousel></Carousel>
    <div className="my-10 lg:mx-20 mx-5">
      <h1 className="text-3xl font-bold text-center py-10">Categories of Chefs</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {
        chefs.map(chef => <Chef 
          key={chef.chef_id} 
          chef={chef}
          ></Chef>)
      }
     </div>
    </div>
    </>
  );
};

export default Home;