import AppStats from './AppStats';
import { connect } from 'react-redux';
import { countArtists } from '../../../redux/artistsRedux';
import { countSongs } from '../../../redux/songsRedux';

const mapStateToProps = (state) => ({
  artistsLength: countArtists(state),
  songsLength: countSongs(state),
});

export default connect(mapStateToProps)(AppStats);
