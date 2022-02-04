import React, { useState, useEffect } from "react";
import './AudioPlay.css';
import AudImg from './aud-img.png';

var a;
const AudioPlay = () => {
  const [buttonName, setButtonName] = useState("Play");

  const [audio, setAudio] = useState();

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="container-aud">
             <img src={AudImg} alt="audio"></img>
      <div className="inner-container">
        <button className = "btn" onClick={handleClick}>{buttonName}</button>
        <input className = "input" type="file" onChange={addFile} />
      </div>
    </div>
  );
};

export default AudioPlay;