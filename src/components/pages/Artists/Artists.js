import ArtistsList from '../../features/ArtistsList/ArtistsListContainer';
import PageTitle from '../../layout/PageTitle/PageTitle';

const Artists = () => (
  <section className="page">
    <PageTitle>Songs</PageTitle>
    <ArtistsList />
  </section>
);

export default Artists;
