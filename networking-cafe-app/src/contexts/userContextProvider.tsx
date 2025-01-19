import { ReactNode, useState } from "react";
import { UserContext, UserState } from "./userContext";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<UserState>({
    name: "",
    interests: [],
  });
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};
