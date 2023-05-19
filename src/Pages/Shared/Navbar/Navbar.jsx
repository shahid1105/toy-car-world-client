import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import profile from "../../../assets/images/profile/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  return (
    <div>
      <div className="navbar bg-base-100 h-28">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/" className="font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/alltoys" className="font-bold">
                  All Toys
                </Link>
              </li>
              <li>
                <Link to="/mytoys" className="font-bold">
                  My Toys
                </Link>
              </li>
              <li>
                <Link to="/addatoys" className="font-bold">
                  Add A Toys
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="font-bold">
                  Blogs
                </Link>
              </li>
              <li>
                {user ? (
                  <>
                    <span className="text-red-500">{user.email}</span>
                  </>
                ) : (
                  <Link>
                    <button>Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <Link to="/">
            <button>
              <div className="flex justify-center items-center">
                <img className="h-20 w-20" src={logo} alt="" />
                <p className="font-extrabold text-2xl">Toy Car World</p>
              </div>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/alltoys" className="font-bold">
                All Toys
              </Link>
            </li>
            <li>
              <Link to="/mytoys" className="font-bold">
                My Toys
              </Link>
            </li>
            <li>
              <Link to="/addatoy" className="font-bold">
                Add A Toy
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="font-bold">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/logout" className="font-bold">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profile} />
            </div>
          </label>
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
