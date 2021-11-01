import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utils/Firebase";


const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
