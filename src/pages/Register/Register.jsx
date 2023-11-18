import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
    createUser(email, password)
    .then(() => {
      updateUser(name, photo)
      .then(result => console.log(result.user))
      .catch(error => console.error(error))
      navigate('/');
    })
    .catch(error => console.error(error))
  } 

  return (
    <div>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Registration!</h1> 
        <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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