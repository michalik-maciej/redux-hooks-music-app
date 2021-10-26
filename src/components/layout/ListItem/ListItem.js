import PropTypes from 'prop-types';

const ListItem = ({ children }) => (
  <li className="flex items-center border-b border-gray-200 p-4 hover:bg-purple-200 transition duration-150 gap-4">
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
