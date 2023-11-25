import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import { getUser } from "../api/user";
import Swal from "sweetalert2";
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

  const signup = async (values, navigate) => {
    try {
      const res = await registerRequest(values);
      setUser(res.data);
      setIsAuthenticated(true);
      if (res.status === 200) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Gracias por registrarte",
          icon: "success",
          color: '#faf8f4',
          background: '#1d130c'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      }
    } catch (err) {
      setErrors(err.response.data);
      throw err;
    }
  };

  const logout = async () => {
    try{
      const res = await logoutRequest();
      setUser(null);
      setIsAuthenticated(false);
    }catch(err){
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
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verifyTokenRequest();
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
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
      setUser(res.data);
    } catch (err) {
    }
  };

  
  const signin = async (values) => {
    try {

      const res = await loginRequest(values);
    
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        return setErrors(err.response.data);
      }
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