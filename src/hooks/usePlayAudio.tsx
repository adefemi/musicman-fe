import { useRef, useState } from "react";

const usePlayAudio = () => {
  const [isPlaying, setIsPlaying] = useState("");
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const onPlay = (link: string) => {
    audioRef.current.pause();
    audioRef.current.src = link;
    audioRef.current.play();

    setIsPlaying(link);
  };

  const onPause = () => {
    audioRef.current.pause();
    setIsPlaying("");
  };

  return {
    playing: (link: string) => isPlaying === link,
    onPlay,
    onPause,
  };
};

export default usePlayAudio;
