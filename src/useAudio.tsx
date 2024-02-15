import { getToken } from "./api";

const sptfyAudio = () => {
  const handleLogin = () => {
    getToken();
  };

  return (
    <div>
      <h1>Spotify API Demo</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default sptfyAudio;
