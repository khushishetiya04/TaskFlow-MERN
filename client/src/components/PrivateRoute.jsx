import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;