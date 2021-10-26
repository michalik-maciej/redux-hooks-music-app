// selectors
export const getAllSongs = (state) => {
  return [
    ...state.songs.data.map((song) => ({
      ...song,
      author: state.artists.find((author) => author.id === song.author).name,
    })),
  ];
};

export const countSongs = (state) => state.songs.data.length;

export const getSongById = (state, songId) => {
  return state.songs.data.find((song) => song.id === songId);
};

// action name creators
const createActionName = (name) => `app/songs/${name}`;
const UPDATE_CURRENT_SONG = createActionName('UPDATE_CURRENT_SONG');

// action creators
export const updateCurrentSong = (payload) => ({
  type: UPDATE_CURRENT_SONG,
  payload,
});

// reducer
const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case UPDATE_CURRENT_SONG: {
      return { ...statePart, currentSong: action.payload };
    }
    default:
      return statePart;
  }
};

export default reducer;
