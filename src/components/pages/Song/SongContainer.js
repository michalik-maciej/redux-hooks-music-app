import Song from './Song';
import { connect } from 'react-redux';
import getSongById from '../../../redux/songsRedux';

const mapStateToProps = (state, props) => ({
  song: getSongById(state, parseInt(props.match.params.songId)),
});

export default connect(mapStateToProps)(Song);
