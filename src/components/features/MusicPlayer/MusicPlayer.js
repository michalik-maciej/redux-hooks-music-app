import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import clsx from 'clsx';
import { useEffect } from 'react';

const MusicPlayer = ({
  // eslint-disable-next-line no-unused-vars
  title,author,
  filename,
  className = '',
  //startAt = 0,
  id,
  updateCurrentSong,
}) => {
  let player = null;
  let currentTime = 0;

  useEffect(() => {
    return () => {
      updateCurrentSong({
        songId: id,
        timeElapsed: currentTime, // player.currentTime jest wtedy już = 0
      });
      player.removeEventListener('timeupdate', updateCurrentTime); //dobra praktyka
    };
  }, []);

  const updateCurrentTime = () => {
    currentTime = player.currentTime;
  };

  const handlePlayer = (e) => {
    //console.log(e);
    if (e && e.audioEl) {
      //console.log(e.audioEl.current);
      player = e.audioEl.current;
      player.addEventListener('timeupdate', updateCurrentTime);
      //player.currentTime = startAt;
      player.play();
    }
  };

  return (
    <div className={clsx(className)}>
      <ReactAudioPlayer
        className="focus:outline-none"
        ref={handlePlayer}
        src={process.env.PUBLIC_URL + '/songs/' + filename}
        autoPlay
        controls
      />
    </div>
  );
};

MusicPlayer.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  filename: PropTypes.string,
  startAt: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.number,
  updateCurrentSong: PropTypes.func.isRequired,
};

export default MusicPlayer;
