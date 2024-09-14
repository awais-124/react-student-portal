import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  const updateUser = data => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    setRole('');
  };

  return <AppContext.Provider value={{ user, role, login, logout, updateUser }}>{children}</AppContext.Provider>;
};
