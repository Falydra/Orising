import { useEffect } from "react";
import { getTopTracks } from "./api";

const Callback = () => {
  useEffect(() => {
    const token = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );
    if (token) {
    
      localStorage.setItem("spotifyToken", token);

    
      getTopTracks(token)
        .then((topTracks) => {
    
          console.log("Top tracks:", topTracks);
        
        })
        .catch((error) => {
          console.error("Error fetching top tracks:", error);
        });
    }
  }, []);

  return <div>Redirecting...</div>;
};

export default Callback;
