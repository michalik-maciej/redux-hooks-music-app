import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ children, to }) => (
  <Link
    to={to}
    className="text-base font-medium text-gray-500 hover:text-gray-900"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default NavLink;
