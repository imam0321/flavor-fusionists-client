import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.status?.from.pathname || '/';

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
    
    if(password.length < 6){
      setError('Password minimum 8 characters');
      return;
    }
    else if(!/(?=.[A-Z])/.test(password)){
      setError('Add capital later on password');
      return;
    }

    createUser(email, password)
    .then(() => {
      updateUser(name, photo)
      .then(result => {
        console.log(result.user);
        setError('');
      })
      .catch(error => console.error(error))
      navigate(from, {replace : true});
    })
    .catch(error => {
      setError(error.message)
    })
  } 

  return (
    <div>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Please Registration!</h1> 
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
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
              <p className='text-red-500'>{error}</p>
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