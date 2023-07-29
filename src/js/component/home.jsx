import React, { useEffect, useRef, useState } from "react";
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
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const previousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="text-center mt-5">Mario's Playlist</h1>
          <ul className="list-group">
            {songs.map((song, index) => (
              <li className="list-group-item" key={index} onClick={() => handleSongSelect(index)}>
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
              <button type="button" className="btn_pause" onClick={pauseSong}>
                <BsFillPauseFill />
              </button>
              <button type="button" className="btn_forward" onClick={nextSong}>
                <BsFillFastForwardFill />
              </button>
            </div>
          </div>

          <div className="list-group-item">
            <audio ref={audioRef} controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
