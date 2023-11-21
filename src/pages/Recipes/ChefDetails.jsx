import { useLoaderData } from "react-router-dom";


const ChefDetails = () => {
  const { chef } = useLoaderData();
  console.log(chef);
  return (
    <div>
      
    </div>
  );
};

export default ChefDetails;