import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className="hero max-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Registration!</h1> 
        <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Please enter your full name"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                name="photoUrl"
                className="file-input w-full max-w-xs"
                required
              />
            </div>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">You have a account please Login</Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-neutral">Sing Up</button>
            </div>
            <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">You have a account please Login</Link>
              </label>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;