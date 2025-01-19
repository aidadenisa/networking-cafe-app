import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};
