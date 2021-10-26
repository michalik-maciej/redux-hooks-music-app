import AppStats from '../../features/AppStats/AppStatsContainer';
import PageTitle from '../../layout/PageTitle/PageTitle';

const Home = () => (
  <section className="page">
    <PageTitle>Welcome back!</PageTitle>
    <AppStats />
  </section>
);

export default Home;
