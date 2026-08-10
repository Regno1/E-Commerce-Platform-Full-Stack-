import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { getCurrentUser } from "../api/userApi";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token && !!user;

  // Hydrate user from token on mount
  useEffect(() => {
    const hydrate = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await getCurrentUser();
        setUser(res.data);
      } catch {
        // Token expired or invalid
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    hydrate();
  }, [token]);

  const login = async (email, password) => {
    const res = await loginUser(email, password);
    const { token: newToken } = res.data;
    localStorage.setItem("token", newToken);
    setToken(newToken);
    // Fetch user info
    const userRes = await getCurrentUser();
    setUser(userRes.data);
    toast.success("Logged in successfully!");
    return userRes.data;
  };

  const register = async (name, email, password) => {
    const res = await registerUser(name, email, password);
    const { token: newToken } = res.data;
    localStorage.setItem("token", newToken);
    setToken(newToken);
    // Fetch user info
    const userRes = await getCurrentUser();
    setUser(userRes.data);
    toast.success("Account created successfully!");
    return userRes.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("Logged out!");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
