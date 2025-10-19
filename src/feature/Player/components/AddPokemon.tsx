import React, { useState } from "react";
import type { Pokemon } from "../../shared/api/pokemon-search-api";
import type { Team, AddResult } from "../../shared/hooks/usePokeStore";
import ToastMessage from "../../../home/components/ToastMessage";

type Props = {
    pokemon: Pokemon;
    teams: Team[];
    addPokemonToTeam: (teamId: string, pokemon: Pokemon) => AddResult;
};

const AddPokemon: React.FC<Props> = ({ pokemon, teams, addPokemonToTeam }) => {
    const [selectedTeamId, setSelectedTeamId] = useState<string>("");

    const handleAdd = () => {
        if (!selectedTeamId) {
            ToastMessage.info("Choose a team first");
            return;
        }
        const res = addPokemonToTeam(selectedTeamId, pokemon);
        if (res.ok) {
            ToastMessage.success("Added to team");
        } else if (res.reason === "duplicate") {
            ToastMessage.info("This Pokémon is already in the team");
        } else if (res.reason === "full") {
            ToastMessage.error("Team is full (max 4)");
        } else if (res.reason === "not-found") {
            ToastMessage.error("Team not found");
        } else {
            ToastMessage.error("Could not add to team");
        }
    };

    return (
        <div className="mt-4 flex items-center justify-center gap-3">
            <select
                value={selectedTeamId}
                onChange={(e) => setSelectedTeamId(e.target.value)}
                className="px-3 py-2 rounded-md border border-slate-300 bg-white"
            >
                <option value="">Select a team</option>
                {teams.map((t) => (
                    <option key={t.id} value={t.id}>
                        {t.name} ({t.pokemons.length}/4)
                    </option>
                ))}
            </select>

            <button
                onClick={handleAdd}
                disabled={!selectedTeamId}
                className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-indigo-800 text-white disabled:opacity-50 hover:bg-indigo-500 active:bg-indigo-900 transition-colors duration-150 font-medium shadow"
            >
                Add to Team
            </button>
        </div>
    );
};

export default AddPokemon;