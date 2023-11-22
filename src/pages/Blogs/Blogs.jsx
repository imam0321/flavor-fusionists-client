import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:w-9/12 lg:mx-auto mx-3 my-10">
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          ></Blog>)
      }
    </div>
  );
};

export default Blogs;
