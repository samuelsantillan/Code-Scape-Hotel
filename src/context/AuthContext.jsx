import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import { getUser } from "../api/user";
import Cookies from "js-cookie";
export const AuthContext = createContext();


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); //
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (values) => {
    try {
      const res = await registerRequest(values);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err.response.data);
      setErrors(err.response.data);
    }
  };

  const logout = async () => {
    try{
      const res = await logoutRequest();
      console.log(res);
      setUser(null);
      setIsAuthenticated(false);
    }catch(err){
      console.log(err);
    }

  };


  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  // Vamos a leer las cookies que estan en el header de la peticion

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      console.log(cookies);
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verifyTokenRequest();
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  const getUserRequest = async (id) => {
    try {
      const res = await getUser(id);
      console.log(res);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  
  const signin = async (values) => {
    try {
      // console.log(values);

      const res = await loginRequest(values);
      console.log(res);
    
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        return setErrors(err.response.data);
      }
      console.log(err); 
      setErrors([err.response.data.message]);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signin, loading, signup, user, isAuthenticated, errors, logout, getUserRequest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;