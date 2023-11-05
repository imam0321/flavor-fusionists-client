import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav>
      <div className="navbar bg-neutral text-neutral-content">
        <h1 className="btn btn-ghost normal-case text-xl">Flavor Fusionists</h1>
       
          <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
          <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
          <Link to='/blogs' className="btn btn-ghost normal-case text-xl">Blogs</Link>

      </div>
    </nav>
  );
};

export default Header;