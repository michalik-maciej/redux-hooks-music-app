import MusicPlayer from './MusicPlayer';
import { connect } from 'react-redux';
import { updateCurrentSong } from '../../../redux/songsRedux';

const mapDispatchToProps = (dispatch) => ({
  updateSong: (data) => dispatch(updateCurrentSong(data)),
});

export default connect(null, mapDispatchToProps)(MusicPlayer);
