import  { createContext, useState,useContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  const initialAuthUser = localStorage.getItem('token');

  const [authUser, setAuthUser] = useState(initialAuthUser || null);
  return(
    <AuthContext.Provider value={[ authUser, setAuthUser] }>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);