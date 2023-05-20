import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ Children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return Children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default ProtectedRoutes;
