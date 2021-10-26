import PropTypes from 'prop-types';

const PageTitle = ({ children }) => (
  <h1 className="text-3xl font-medium mt-6">{children}</h1>
);

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
