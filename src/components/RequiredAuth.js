
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  // Check if the user is authenticated (e.g., by checking for a token)
  const isAuthenticated = !!localStorage.getItem('token');

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    navigate('/login');
    return null; // Return null to prevent rendering of the wrapped component
  }

  return children; // Render the wrapped component if authenticated
};

export default RequireAuth;
