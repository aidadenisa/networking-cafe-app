import { useContext } from "react";
import { UserContext } from "./userContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an AppProvider");
  }
  return context;
};
