import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ role: 'admin' });
    } else if (username === 'manager' && password === 'manager') {
      setUser({ role: 'manager' });
    } else {
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
