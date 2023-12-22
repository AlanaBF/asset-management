import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  // Use state to manage the logged-in status
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Simulate checking user authentication status
  useEffect(() => {
       const userIsLoggedIn = /* your authentication logic to check if the user is logged in */ true;

    // Update the isLoggedIn state based on the authentication status
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
