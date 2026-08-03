import { createContext, useState, useEffect } from "react";

// Create Context
export const AuthContext = createContext();

// Provider Component
const AuthProvider = ({ children }) => {

  // Store logged-in user
  const [user, setUser] = useState(null);

  // Store JWT token
  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  // Login Function
  const login = (data) => {
    // Update React State
    setUser(data.user);
    setToken(data.token);

    // Save in localStorage
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  // Logout Function
  const logout = () => {
    // Clear React State
    setUser(null);
    setToken(null);

    // Remove from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // Restore Login after Refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;