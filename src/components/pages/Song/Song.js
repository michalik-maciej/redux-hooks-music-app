import MusicPlayer from '../../features/MusicPlayer/MusicPlayerContainer';
import PageTitle from '../../layout/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Song = ({state, song, songId}) => {
  
  const getSongById = (state, songId) => {
    return state.songs.data.find(song => song.id === songId);
  };

  console.log('song from useSelector:', 
    useSelector(() => getSongById(state, songId))
  );
  console.log('song from mapProps:', song);
  
  return (
    <section className="page">
      <PageTitle>Song</PageTitle>
      <MusicPlayer
        className="mt-6"
        /*         title={song.title}
        author={song.author}
        filename={song.filename}
        id={song.id} */
      />
    </section>);}
;

Song.propTypes = {
  state: PropTypes.any,
  props: PropTypes.any,
  song: PropTypes.any,
  songId: PropTypes.any,
};



export default Song;
