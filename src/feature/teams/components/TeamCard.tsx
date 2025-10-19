import React from "react";
import type { Team } from "../../shared/hooks/usePokeStore";
import { } from "../../shared/hooks/usePokeStore";
import TeamCapacityBar from "./TeamCapacityBar";
import PokemonMemberCard from "./PokemonMemberCard";

const MAX_TEAM_SIZE = 4;

type TeamCardProps = {
    team: Team;
    onRemovePokemon: (pokemonId: number) => void;
    onRemoveTeam: () => void;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, onRemovePokemon, onRemoveTeam }) => {

    return (
        <div className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            {/* Team Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="font-semibold text-xl text-slate-900 mb-1">{team.name}</h3>
                    <p className="text-sm text-slate-500">
                        {team.pokemons.length} of {MAX_TEAM_SIZE} members
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {/* Team capacity dots */}
                    <div className="flex items-center gap-1">
                        {[...Array(MAX_TEAM_SIZE)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${i < team.pokemons.length
                                    ? 'bg-indigo-500'
                                    : 'bg-slate-200'
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Delete team button */}
                    <button
                        onClick={onRemoveTeam}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors ml-2"
                        title="Delete team"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Capacity Bar */}
            <TeamCapacityBar
                currentCount={team.pokemons.length}
                maxCount={MAX_TEAM_SIZE}
            />

            {/* Pokemon List */}
            {team.pokemons.length === 0 ? (
                <div className="text-center py-6 border-2 border-dashed border-slate-200 rounded-2xl">
                    <p className="text-sm text-slate-500">No Pokémon added yet</p>
                    <p className="text-xs text-slate-400 mt-1">Search and add Pokémon above</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {team.pokemons.map((pokemon) => (
                        <PokemonMemberCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            onRemove={() => onRemovePokemon(pokemon.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamCard;