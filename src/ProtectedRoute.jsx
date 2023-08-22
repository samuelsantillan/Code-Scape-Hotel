import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading, user } = useAuth();
  console.log(user);
  if (loading) return <h1>Loading...</h1>;
  console.log(loading, isAuthenticated);
  // if(!isAuthenticated  ) return <Navigate to='/home' replace />
  if (!isAuthenticated && !loading) return <Navigate to='/login' replace />
  console.log(user.role, isAuthenticated);
  if(isAuthenticated && user.role === 1) return <Navigate to='/admin' replace />
  return <Outlet />;
};

export default ProtectedRoute;
