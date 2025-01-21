import React from 'react';
import { Network } from '../components/network/Network';

// Lazy load profile
const Profile = React.lazy(() => import('../components/profile/Profile'));

export const routes = [
  {
    path: '/',
    element: <Network />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];
