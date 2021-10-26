import PropTypes from 'prop-types';

const AppStats = ({ artistsLength, songsLength }) => (
  <div className="bg-gradient-to-r from-purple-200 via-purple-500 to-pink-700 rounded-md p-10 my-8 shadow-lg">
    <h2 className="font-medium text-3xl mt-2 text-center text-white">
      Our stats
    </h2>

    <div className="flex flex-wrap justify-center mt-10">
      <div className="font-bold mt-2 text-6xl mr-2 text-white bg-indigo-600 p-8 rounded-md shadow-md w-max w-auto">
        {artistsLength} artists
      </div>
      <div className="font-bold mt-2 text-6xl ml-2 text-white bg-indigo-600 p-8 rounded-md shadow-md w-max w-auto">
        {songsLength} songs
      </div>
    </div>
  </div>
);

AppStats.propTypes = {
  artistsLength: PropTypes.number.isRequired,
  songsLength: PropTypes.number.isRequired,
};

export default AppStats;
