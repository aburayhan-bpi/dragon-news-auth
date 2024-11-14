import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2x p-5">
        <h2 className="text-center font-semibold text-2xl">
          Login your account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
          <p className="font-semibold flex justify-center">
            Dont’t Have An Account?
            <Link className="text-red-500 ml-1" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
