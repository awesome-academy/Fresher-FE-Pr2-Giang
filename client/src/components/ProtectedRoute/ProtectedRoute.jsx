import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogin }) => {
  return (
    isLogin ? <Outlet /> : <Navigate to='/login' />
  )
};

export default ProtectedRoute;
