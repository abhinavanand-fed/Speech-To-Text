import React, { useState } from 'react';
import './SpeechToText.css';

const SpeechToText = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className="container">
      <textarea className="textarea" onChange={handleChange} value={text} />
      <button className="button" onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default SpeechToText;
