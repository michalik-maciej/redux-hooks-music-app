import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
