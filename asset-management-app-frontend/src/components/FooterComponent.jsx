import SignOut from "./SignOut/SignOut";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const FooterComponent = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear authentication token or perform logout action
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <footer className="footer">
        <span>All rights reserved 2023 Alana</span>
        <div>
          {isLoggedIn ? (
            <SignOut onLogout={handleLogout} /> // Render the SignOut component when logged in
          ) : null}
        </div>
      </footer>
    </div>
  );
};

FooterComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default FooterComponent;
