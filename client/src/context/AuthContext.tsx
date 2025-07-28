import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// TODO: Add authentication logic with backend connection
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("authToken") ? true : false;
  });

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData: User) => {
    localStorage.setItem("authToken", "dummy");
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
