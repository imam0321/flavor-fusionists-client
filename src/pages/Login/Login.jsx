import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSingIn, githubSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handleGoogleLogin = () => {
    googleSingIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handleGitHubLogin = () => {
    githubSingIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Please Login now!</h1>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Please enter your password"
                className="input input-bordered"
                required
              />
              <label className="label flex justify-between items-center">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
                <Link to="/register" className="label-text-alt link link-hover">
                  Sing Up !
                </Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-neutral">Login</button>
            </div>
            <div className="flex justify-around items-center ">
              <button
                onClick={handleGoogleLogin}
                className="btn text-white bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 w-1/2 mr-1"
              >
                Google
              </button>
              <button
                onClick={handleGitHubLogin}
                className="btn  text-white bg-gradient-to-r from-slate-500 via-slate-500 to-slate-400 w-1/2 "
              >
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
