import Song from './Song';
import { connect } from 'react-redux';
import getSongById from '../../../redux/songsRedux';

/* const getSongById = (state, songId) => {
  return state.songs.data.find(song => song.id === songId);
}; */

const mapStateToProps = (state, props) => ({
  state, 
  songId: parseInt(props.match.params.songId),
  song: getSongById(state, parseInt(props.match.params.songId)),
});

export default connect(mapStateToProps)(Song);
