import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import  LoadingPage  from "./pages/loading/LoadingPage";
const PRIVILEGED_ROLES = {
  ADMIN: 0,
  USER: 1,
};

export const ProtectedRoute = () => {
  const { isAuthenticated, loading, user } = useAuth();
  if (loading) return <LoadingPage />;
  // if(!isAuthenticated  ) return <Navigate to='/home' replace />
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  // if(isAuthenticated && user.role === PRIVILEGED_ROLES.ADMIN) return <Navigate to='/admin' replace />
  if (isAuthenticated && user.role === PRIVILEGED_ROLES.USER)
    return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
