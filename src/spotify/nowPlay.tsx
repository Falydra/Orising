import { useState, useEffect } from "react";
import fetch from "node-fetch";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
  });

  return response.json();
};

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const { VITE_CLIENT_ID, VITE_CLIENT_SECRET, VITE_REFRESH_TOKEN } =
          import.meta.env;

        const response = await getNowPlaying(
          VITE_CLIENT_ID,
          VITE_CLIENT_SECRET,
          VITE_REFRESH_TOKEN
        );

        if (!response || response.status === 204 || response.status > 400) {
          setNowPlaying(false);
          return;
        }

        const song = await response.json();
        setNowPlaying(song);
      } catch (error) {
        console.error("Error fetching now playing:", error);
        setNowPlaying(false);
      }
    };

    fetchNowPlaying();
  }, []);

  if (nowPlaying === null) {
    return <div>Loading...</div>;
  }

  if (nowPlaying === false) {
    return <div>Not playing anything.</div>;
  }

  return (
    <div>
      <h2>Now Playing</h2>
      <p>Title: {nowPlaying.item.name}</p>
      <p>
        Artist:{" "}
        {nowPlaying.item.artists.map((artist: any) => artist.name).join(", ")}
      </p>
      <p>Album: {nowPlaying.item.album.name}</p>
      <img src={nowPlaying.item.album.images[0].url} alt="Album Cover" />
    </div>
  );
};

export default NowPlaying;
