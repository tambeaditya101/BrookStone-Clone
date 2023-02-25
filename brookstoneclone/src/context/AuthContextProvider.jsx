import React, { createContext, useState } from "react";
import Swal from "sweetalert2"


export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {

  const [isAuth, setIsAuth] = useState(false);
  
  const login = () => {
    setIsAuth(true);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have successfully login',
        showConfirmButton: false,
        timer: 2500
      })
      
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
