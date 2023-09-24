import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  if (email) {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default PrivetRoute;
