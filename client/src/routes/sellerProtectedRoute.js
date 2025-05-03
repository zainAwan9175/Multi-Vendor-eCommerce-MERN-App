import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";

const ProtectedRoute = ({  children }) => {
  const {isloading, isSeller,seller } = useSelector((state) => state.seller);
  if(isloading==true)
  {
     <Loader></Loader>
  }
 else if (!isSeller) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
