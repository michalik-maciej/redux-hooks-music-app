import PropTypes from 'prop-types';

const List = ({ children }) => <ul className="my-6 max-w-lg">{children}</ul>;

List.propTypes = {
  children: PropTypes.node,
};

export default List;
