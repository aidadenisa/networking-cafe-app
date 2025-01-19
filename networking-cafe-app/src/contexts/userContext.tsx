import { createContext } from "react";

export type UserState = {
  name: string;
  interests: string[];
};

export const UserContext = createContext<
  | {
      state: UserState;
      setState: React.Dispatch<React.SetStateAction<UserState>>;
    }
  | undefined
>(undefined);
