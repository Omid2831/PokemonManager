import React from "react";
import type { Pokemon } from "../../shared/api/pokemon-search-api";

type PokemonMemberCardProps = {
    pokemon: Pokemon;
    onRemove: () => void;
};

const PokemonMemberCard: React.FC<PokemonMemberCardProps> = ({ pokemon, onRemove }) => {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
            <div className="flex items-center gap-3">
                {pokemon.sprites?.front_default && (
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-10 h-10 rounded-lg bg-white border border-slate-200"
                    />
                )}
                <div>
                    <p className="font-medium text-slate-900 capitalize">{pokemon.name}</p>
                    <p className="text-xs text-slate-500">ID: {pokemon.id}</p>
                </div>
            </div>
            <button
                onClick={onRemove}
                className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Remove from team"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default PokemonMemberCard;