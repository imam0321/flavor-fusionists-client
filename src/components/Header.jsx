import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaBars, FaClosedCaptioning } from "react-icons/fa";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut= () => {
    logOut()
    .then(()=>{})
    .catch(()=>{})
  } 
  return (
    <nav>
      <div className="flex justify-between navbar bg-neutral text-neutral-content">
        <h1 className="btn btn-ghost normal-case text-xl">Flavor Fusionists</h1>
       
          <div className="md:flex">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
          <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
          <Link to='/blogs' className="btn btn-ghost normal-case text-xl">Blogs</Link>
          </div>
        
          <div>
          {
            user ? 
            <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">LogOut</button> :
            <Link to='/login' className="btn btn-ghost normal-case text-xl">LogIn</Link>
          }
          </div>
      </div>
      
    </nav>
  );
};

export default Header;