import PlayingAnimation from "./assets/animation";
import SpotifyLogo from "./assets/logo";
import Socials from "./socials";
import Image from "next/image";
import avatar from "./assets/avatar.png";






export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center "> 
      <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <div className="flex flex-col gap-2 items-center p-12 sm:p-20 rounded-lg shadow-lg hover:shadow-2xl dark:hover:shadow-slate-800 transition-shadow duration-500 ease-in-out cursor-pointer bg-slate-100 dark:bg-zinc-900">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center mb-4">920</h1>
          <div className="avatar-container mb-6">
            <Image src={avatar} alt="Avatar" className="avatar-img rounded-full" width={100} height={100} />
          </div>
          <Socials />
          <SpotifyLogo />
          <PlayingAnimation />
        </div>
      </div>
    </main>
  );
}
