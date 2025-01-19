import { Network } from "../components/network/Network";
import { Profile } from "../components/profile/Profile";

export const routes = [
  {
    path: "/",
    element: <Network />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
