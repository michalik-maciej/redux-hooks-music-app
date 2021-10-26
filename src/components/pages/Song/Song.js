import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import PageTitle from '../../layout/PageTitle/PageTitle';
import PropTypes from 'prop-types';

const Song = ({ song }) => (
  <section className="page">
    <PageTitle>Song</PageTitle>
    <MusicPlayer
      className="mt-6"
      title={song.title}
      author={song.author}
      filename={song.filename}
      id={song.id}
    />
  </section>
);

Song.propTypes = {
  song: PropTypes.object.isRequired,
};

export default Song;
