import React, { useRef, useState } from "react";
import { BsFillRewindFill } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillFastForwardFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

const songURL = "https://assets.breatheco.de/apis/sound/";
const songs = [
  songURL + "files/mario/songs/castle.mp3",
  songURL + "files/mario/songs/hurry-starman.mp3",
  songURL + "files/mario/songs/overworld.mp3"
];

const Home = () => {
  const input = useRef();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const changeSrc = (songIndex) => {
    setCurrentSongIndex(songIndex);
    playSong();
  };

  const playSong = () => {
    input.current.play();
  };

  const pauseSong = () => {
    input.current.pause();
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    changeSrc(nextIndex);
  };

  const previousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSrc(previousIndex);
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="text-center mt-5">Mario's Playlist</h1>
          <ul className="list-group">
            {songs.map((song, index) => (
              <li className="list-group-item" key={index} onClick={() => changeSrc(index)}>
                {index + 1}. song_{index + 1}
              </li>
            ))}
          </ul>

          <div>
            <div className="alert alert-light" role="alert">
              <button type="button" className="btn_back" onClick={previousSong}>
                <BsFillRewindFill />
              </button>
              <button type="button" className="btn_play" onClick={playSong}>
                <BsFillPlayFill />
              </button>
              <button type="button" className="btn_play" onClick={pauseSong}>
                <BsFillPauseFill />
              </button>
              <button type="button" className="btn_forward" onClick={nextSong}>
                <BsFillFastForwardFill />
              </button>
            </div>
          </div>

          <div className="list-group-item">
            <audio src={songs[currentSongIndex]} controls ref={input} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
