import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('clubmast_token');
    const storedUser = localStorage.getItem('clubmast_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else {
      // Don't redirect immediately to allow public routes to work
      // specific protected routes will handle their own redirection
    }
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('clubmast_token', newToken);
    localStorage.setItem('clubmast_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('clubmast_token');
    localStorage.removeItem('clubmast_user');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
