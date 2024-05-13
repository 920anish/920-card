'use client';
import Socials from "./socials";
import Image from "next/image";
import avatar from "./assets/avatar.png";
import SpotifyContainer from "./playing";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center"> 
      <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <div className="flex flex-col gap-2 items-center px-16  py-6 sm:py-16 rounded-lg shadow-lg hover:shadow-2xl dark:hover:shadow-slate-800 transition-shadow duration-500 ease-in-out cursor-pointer bg-slate-100 dark:bg-zinc-900">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center">920</h1>
          <div className="avatar-container">
            <Image priority src={avatar} alt="Avatar" className="avatar-img rounded-full grayscale hover:grayscale-0" width={100} height={100} />
          </div>
          <Socials />
          <SpotifyContainer />
        </div>
      </div>
    </main>
  );
}