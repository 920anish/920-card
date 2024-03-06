import { useEffect, useState } from 'react';
import PlayingAnimation from './assets/animation';
import SpotifyLogo from "./assets/logo";
import Image from 'next/image';

interface NowPlayingData {
  isOnline: boolean;
  song: string;
  artist: string;
  link: string;
  image: string;
}

const SpotifyContainer = () => {
  const [nowPlayingData, setNowPlayingData] = useState<NowPlayingData>({
    isOnline: false,
    song: '',
    artist: '',
    link: '',
    image: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/spotify');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
          console.error('Unexpected end of JSON input');
          setNowPlayingData(prevData => ({ ...prevData, isOnline: false }));
        } else {
          setNowPlayingData(data);
        }
      } catch (error:any) {
        console.error('Error fetching now playing data:', error.message);
        setNowPlayingData(prevData => ({ ...prevData, isOnline: false }));
      }
    };

    const interval = setInterval(fetchData, 3000);

    fetchData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 text-center">
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center mb-4">
        <SpotifyLogo />
        <div className="flex justify-center mt-2">
          {nowPlayingData.isOnline ? (
            <span className="bg-green-300 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">ONLINE</span>
          ) : (
            <span className="bg-gray-300 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">OFFLINE</span>
          )}
        </div>
        {nowPlayingData.isOnline && <PlayingAnimation />}
        {nowPlayingData.isOnline ? (
          <div className="max-w-sm mx-auto m-4">
           <Image src={nowPlayingData.image} height={100} width={100} alt="Album Art" className="rounded-lg mb-4 mx-auto" />
            <div className="text-center mb-4">
              <h2 className="text-sm font-semibold">{nowPlayingData.song}</h2>
              <p className="text-gray-600">
                <a href={nowPlayingData.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                  {nowPlayingData.artist}
                </a>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 m-4">Listenin&apos; to the voices!</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyContainer;
