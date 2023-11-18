import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <nav>
      <div className="md:flex md:justify-between navbar bg-neutral text-neutral-content">
        <h1 className="btn btn-ghost normal-case text-xl">Flavor Fusionists</h1>

        <div className="">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>

          <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
            Blogs
          </Link>
          <div className="">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-ghost normal-case text-xl"
              >
                LogOut
              </button>
            ) : (
              <Link to="/login" className="btn btn-ghost normal-case text-xl">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
