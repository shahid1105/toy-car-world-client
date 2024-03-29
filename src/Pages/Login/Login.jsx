import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { auth, setLoading, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("login");

  const from = location.state?.from?.pathname || "/";

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        alert("login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        alert("login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" bg-base-200">
      <div className="hero-content flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-blue-600">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="font-extrabold mt-8 flex justify-center">
                <button onClick={handleGoogleLogin} className="text-3xl">
                  <FaGoogle />
                </button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to Toy Car World{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
