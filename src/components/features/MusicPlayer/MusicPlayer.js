import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import clsx from 'clsx';
import { useEffect } from 'react';

const MusicPlayer = ({
  title,
  author,
  filename,
  className = '',
  startAt = 0,
  id,
  updateSong,
}) => {
  let player = null;
  let currentTime = 0;

  useEffect(() => {
    return () => {
      updateSong({
        songId: id,
        timeElapsed: currentTime,
      });
    };
  }, []);

  const handlePlayer = (e) => {
    //console.log(e);
    if (e && e.audioEl) {
      //console.log(e.audioEl.current);
      player = e.audioEl.current;
      player.currentTime = startAt;
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  filename: PropTypes.string,
  startAt: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  updateSong: PropTypes.func.isRequired,
};

export default MusicPlayer;
