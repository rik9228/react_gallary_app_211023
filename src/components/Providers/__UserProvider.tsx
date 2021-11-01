import { createContext, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = (props: any) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
