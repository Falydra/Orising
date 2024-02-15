import { useEffect } from "react";
import { getTopTracks } from "./api";

const Callback = () => {
  useEffect(() => {
    const token = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );
    if (token) {
      // Store the token in local storage or state management
      localStorage.setItem("spotifyToken", token);

      // Fetch top tracks and play them
      getTopTracks(token)
        .then((topTracks) => {
          // Play the tracks
          console.log("Top tracks:", topTracks);
          // Implement logic to play tracks
        })
        .catch((error) => {
          console.error("Error fetching top tracks:", error);
        });
    }
  }, []);

  return <div>Redirecting...</div>;
};

export default Callback;
