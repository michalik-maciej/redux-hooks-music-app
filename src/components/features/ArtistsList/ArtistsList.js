import List from '../../layout/List/List';
import ListItem from '../../layout/ListItem/ListItem';
import PropTypes from 'prop-types';

const SongsList = ({ artists }) => (
  <List>
    {artists.map((artist) => (
      <ListItem key={artist.id}>
        <div>{artist.id}</div>
        <div className="font-semibold">{artist.name}</div>
        <div>{artist.songsAmount} songs</div>
      </ListItem>
    ))}
  </List>
);

SongsList.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default SongsList;
