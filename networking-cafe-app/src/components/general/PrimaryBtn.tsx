import { ReactNode } from "react";
import "./PrimaryBtn.css";

type PrimaryBtnProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export const PrimaryBtn = ({ children, onClick }: PrimaryBtnProps) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
