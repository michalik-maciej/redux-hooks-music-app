import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPlayer from '../MainPlayer/MainPlayer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <main>
    <Header />
    <Container>{children}</Container>
    <MainPlayer />
    <Footer />
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
