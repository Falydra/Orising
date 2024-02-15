import { useMemo, useEffect, useState } from "react";

const useAudio = (url: string) => {
  const audio = useMemo(() => new Audio(url), []);
  const [isPlaying, setPlaying] = useState(false);

  const toggle = () => setPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [isPlaying, toggle];
};

export default useAudio;
