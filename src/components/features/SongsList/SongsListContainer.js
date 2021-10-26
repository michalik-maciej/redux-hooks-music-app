import SongsList from './SongsList';
import { connect } from 'react-redux';
import { getAllSongs } from '../../../redux/songsRedux';

const mapStateToProps = (state) => ({
  songs: getAllSongs(state),
});

export default connect(mapStateToProps)(SongsList);
