import React from "react";
import { Heart } from "lucide-react";
import usePokeStore from "../shared/hooks/usePokeStore";
import type { Pokemon } from "../shared/api/pokemon-search-api";
import type { Team, AddResult } from "../shared/hooks/usePokeStore";
import AddPokemon from "./components/AddPokemon";

type Props = {
  pokemon: Pokemon;
  teams: Team[];
  addPokemonToTeam: (teamId: string, pokemon: Pokemon) => AddResult;
};

const PokemonPlayer: React.FC<Props> = ({ pokemon, teams, addPokemonToTeam }) => {

  // Favorite logic
  const toggleFavorite = usePokeStore((s) => s.toggleFavorite);
  const isFavorite = usePokeStore((s) => s.isFavorite)(pokemon.id);

  return (
    <div className="relative mt-8 p-6 rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-lg max-w-md mx-auto hover:scale-[1.02] transition-transform duration-200">

      {/* Favorite Heart */}
      <button
        onClick={() => toggleFavorite(pokemon)}
        className="absolute top-4 right-4 transition-transform hover:scale-125"
      >
        <Heart
          size={28}
          className={`${isFavorite ? "fill-red-500 text-red-500 animate-pulse" : "text-gray-400"}`}
        />
      </button>

      {/* Name */}
      <h2 className="text-center text-3xl font-bold capitalize text-gray-800 mb-4">{pokemon.name}</h2>

      {/* Image */}
      {pokemon.sprites?.front_default && (
        <div className="flex justify-center mb-4">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-36 h-36 object-contain drop-shadow-lg"
          />
        </div>
      )}

      {/* Types */}
      {pokemon.types && (
        <div className="flex justify-center gap-2 flex-wrap mb-3">
          {pokemon.types.map((t: any) => (
            <span
              key={t.type?.name}
              className={`px-3 py-1 rounded-full text-sm font-semibold capitalize
                          ${t.type?.name === "fire" ? "bg-red-200 text-red-800" :
                             t.type?.name === "water" ? "bg-blue-200 text-blue-800" :
                             t.type?.name === "grass" ? "bg-green-200 text-green-800" :
                             "bg-gray-200 text-gray-700"}`}
            >
              {t.type?.name}
            </span>
          ))}
        </div>
      )}

      {/* Abilities */}
      {pokemon.abilities && (
        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {pokemon.abilities.map((a: any) => (
            <span
              key={a.ability?.name}
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium capitalize"
            >
              {a.ability?.name}
            </span>
          ))}
        </div>
      )}

      {/* Add to Team */}
      {teams.length > 0 && (
        <div className="mt-4">
          <AddPokemon pokemon={pokemon} teams={teams} addPokemonToTeam={addPokemonToTeam} />
        </div>
      )}
    </div>
  );
};

export default PokemonPlayer;
