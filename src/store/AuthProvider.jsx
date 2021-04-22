import React, { useContext, useState } from "react";

const AuthContext = React.createContext();
const AuthHandleContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
export const useHandleAuth = () => useContext(AuthHandleContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const handleAuth = (state) => {
    setAuth(state);
  };

  return (
    <AuthContext.Provider value={auth}>
      <AuthHandleContext.Provider value={handleAuth}>
        {children}
      </AuthHandleContext.Provider>
    </AuthContext.Provider>
  );
};
