// selector
export const getAllArtists = (state) => {
  return [
    ...state.artists.map((artist) => ({
      ...artist,
      songsAmount: state.songs.data.filter((song) => song.author === artist.id)
        .length,
    })),
  ];
};

export const countArtists = (state) => state.artists.length;

// action name creators
//const createActionName = name => `app/artists/${name}`;

// action creators

// reducer
const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default reducer;
