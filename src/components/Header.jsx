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
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[3] p-2 shadow bg-neutral text-neutral-content rounded w-52"
            >
              <div>
                {user ? (
                  <div className="flex flex-col-reverse items-center">
                    <button>{user?.displayName}</button>
                    <img
                      className="my-2 h-10 w-10 rounded-full"
                      src={user?.photoURL || '../../public/title.jpg'}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Link to="/" className="btn btn-ghost normal-case">
                Home
              </Link>
              <Link to="/blogs" className="btn btn-ghost normal-case">
                Blogs
              </Link>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost normal-case "
                >
                  LogOut
                </button>
              ) : (
                <Link to="/login" className="btn btn-ghost normal-case">
                  LogIn
                </Link>
              )}
               {
                user ? '' : <Link to="/register" className="btn btn-ghost normal-case">
                Registration
                </Link>
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Flavor Fusionists</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
                Blogs
              </Link>
            </li>
            <li>
              {
                user ? '' : <Link to="/register" className="btn btn-ghost normal-case text-xl">
                Registration
              </Link>
              }
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="">
            {user ? (
              <div className="flex items-center">
                <img
                  className="mx-1 h-10 w-10 rounded-full"
                  src={user?.photoURL || '../../public/title.jpg'}
                  alt=""
                />
                 <button className="normal-case text-xl">{user?.displayName}</button>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost normal-case text-xl"
                >
                  LogOut
                </button>
              </div>
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
