import { useState } from "react";

export const Hero = () => {
  // Zustand für Mute/Unmute
  const [isMuted, setIsMuted] = useState(true);

  // Funktion zum Umschalten der Stummschaltung
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      {/* Container für das Video */}
      
      {/* Desktop Video */}
      <video
        className="w-full h-full object-cover ease-in-out hidden md:block"
        autoPlay
        muted={isMuted}
        loop
      >
        <source
          src="https://www.materiaslab.com/video/MATERIA_Slab_in_Evolution_2021(EN).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video */}
      <video
        className="w-full h-full object-cover ease-in-out md:hidden"
        autoPlay
        muted={isMuted}
        loop
      >
        <source
          src="https://www.materiaslab.com/video/MATERIA_Slab_in_Evolution_2021(EN).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Mute Button */}
      <button
        id="mute-desk"
        onClick={toggleMute}
        className="absolute bottom-0 left-[8.33%] z-[8990] mb-[50px] px-[30px] py-[8px] cursor-pointer text-xs uppercase text-black border-b-2 border-white bg-gradient-to-b from-white/60 to-white/60"
      >
        {isMuted ? "Enstummen" : "Stummen"}
      </button>
    </section>
  );
};
