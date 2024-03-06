import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
      throw new Error('Missing Spotify credentials');
    }

    const credentials = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

    const getAccessToken = async () => {
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('refresh_token', process.env.SPOTIFY_REFRESH_TOKEN || '');

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      return response.json();
    };

    const { access_token } = await getAccessToken() as { access_token: string }; 

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log('Response Status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const rawData = await response.text();
    const data = rawData ? JSON.parse(rawData) : null;

    if (!data) {
      console.error('Unexpected end of JSON input');
      const nowPlayingData = { isOnline: false };
      return NextResponse.json(nowPlayingData, { status: 200 });
    } else {
      const nowPlayingData = {
        isOnline: data.is_playing,
        song: data.item.name,
        artist: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
        link: data.item.external_urls.spotify,
        image: data.item.album.images.length > 0 ? data.item.album.images[0].url : null,
      };

      return NextResponse.json(nowPlayingData, { status: 200 });
    }
  } catch (error: any) {
    console.error('Error fetching now playing data:', error.message);
    const nowPlayingData = { isOnline: false };
    return NextResponse.json(nowPlayingData, { status: 200 });
  }
}
