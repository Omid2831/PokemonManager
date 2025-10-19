import React from "react";
import usePokeStore from "../shared/hooks/usePokeStore";

const FavPokemon: React.FC = () => {
    const favorites = usePokeStore((s) => s.favorites); // subscribe to store

    if (favorites.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                {/* Empty State for no favorites */}
                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-3xl shadow-md border border-gray-200 p-6 max-w-md w-full">
                    <svg
                        className="w-16 h-16 text-gray-300 mb-4 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>

                    <p className="text-gray-500 font-medium text-lg">No favorite Pokémon yet 💔</p>
                    <p className="text-gray-400 mt-2 text-sm">Go back and tap the heart to add some!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 m-3">
            {favorites.map((fav) => (
                <div key={fav.id} className="relative bg-white shadow-md rounded-xl p-4 text-center transition-all duration-300 ease-in-out hover:scale-105">
                    <img src={fav.sprites?.front_default} alt={fav.name} className="w-24 h-24 mx-auto" />
                    <h2 className="text-lg font-semibold mt-2 capitalize">{fav.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default FavPokemon;