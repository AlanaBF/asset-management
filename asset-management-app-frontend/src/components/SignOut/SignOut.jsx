import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const SignOut = ({ onLogout }) => {
  return (
    <Button className='btn btn-danger' onClick={onLogout}>
      Sign Out
    </Button>
  );
};

SignOut.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SignOut;