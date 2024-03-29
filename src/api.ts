export const getToken = async () => {
  const CLIENT_ID = "613f22337e454a6a8787c09e67acdf10";
  const REDIRECT_URI = "http://localhost:5173/callback";
  const SCOPE = "user-read-private user-read-email"; 

  const response = await fetch("https://accounts.spotify.com/authorize", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      client_id: CLIENT_ID,
      response_type: "token",
      redirect_uri: REDIRECT_URI,
      scope: SCOPE,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to obtain access token");
  }

  const data = await response.json();
  const accessToken = data.access_token;
  return accessToken;
};
