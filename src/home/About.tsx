// pages/About.tsx
import React from "react";


const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-yellow-50 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Fullscreen Pikachu Image */}
      <img
        src={'../assets/pikachu.png'}
        alt="Pikachu"
        className="absolute inset-0 w-full h-100 object-contain pointer-events-none"
      />

      {/* Overlay content */}
      <div className="relative top-20 z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Pokémon Team Manager!
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Pokémon Team Manager is a tool to manage your Pokémon teams, track your favorite Pokémon, and explore the world of Pokémon in one place.
        </p>

        <p className="text-gray-600 text-lg mb-2">
          This app was proudly created by <span className="font-semibold">Omid</span> 🎉
        </p>

        <p className="text-gray-600 text-sm italic">
          Catch 'em all and enjoy your Pokémon adventure! ⚡
        </p>
      </div>
    </div>
  );
};

export default About;
