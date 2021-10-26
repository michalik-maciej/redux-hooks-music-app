const data = {
  songs: {
    data: [
      {
        id: 1,
        title: 'At The Top',
        author: 1,
        filename: 'At_The_Top_David_Renda.mp3',
      },
      {
        id: 2,
        title: 'Silly Feet',
        author: 1,
        filename: 'Silly_Feet_David_Renda.mp3',
      },
      {
        id: 3,
        title: 'Western adventures',
        author: 2,
        filename: 'Western_Adventures_-_David_Fesliyan.mp3',
      },
      {
        id: 4,
        title: 'Bass trap',
        author: 3,
        filename: 'BASS_TRAP_Steve_Oxen.mp3',
      },
    ],
    currentSong: {
      songId: null,
      timeElapsed: 0,
    },
  },
  artists: [
    {
      id: 1,
      name: 'David Renda',
    },
    {
      id: 2,
      name: 'David Fesliyan',
    },
    {
      id: 3,
      name: 'Steve Oxen',
    },
  ],
};

export default data;
