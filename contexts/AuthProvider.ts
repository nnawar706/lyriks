import { createContext, useContext, useEffect, useState } from "react";

import { authUser } from "../lib/appwrite";
import { GlobalProviderProps } from "@/types";

interface User {
  // Define the properties of the user object
}

interface GlobalContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

const AuthContext = createContext({} as any);

// export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authUser()
      .then((res: User | null) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider