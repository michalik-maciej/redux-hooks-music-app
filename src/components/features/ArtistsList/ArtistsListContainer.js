import ArtistsList from './ArtistsList';
import { connect } from 'react-redux';
import { getAllArtists } from '../../../redux/artistsRedux';

const mapStateToProps = (state) => ({
  artists: getAllArtists(state),
});

export default connect(mapStateToProps)(ArtistsList);
