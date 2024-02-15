// import fetch from "node-fetch"; // Install this dependency: npm install node-fetch
// import dotenv from "dotenv";

// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// const getAccessToken = async (client_id, client_secret, refresh_token) => {
//   const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
//   });

//   return response.json();
// };

// const getNowPlaying = async (client_id, client_secret, refresh_token) => {
//   const { access_token } = await getAccessToken(
//     client_id,
//     client_secret,
//     refresh_token
//   );

//   return fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

// export default getNowPlaying;
