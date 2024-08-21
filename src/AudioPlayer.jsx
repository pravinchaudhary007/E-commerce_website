import { useEffect, useRef } from 'react';
import bgSound from './assets/bgSound.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      const audio = audioRef.current;

      if (audio) {
        try {
   
          await audio.play();
         
          audio.muted = false;
        } catch (error) {
          console.error("Autoplay was prevented:", error);
        }
      }
    };

    playAudio();

    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0; 
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} preload="auto" loop muted>
        <source src={bgSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
