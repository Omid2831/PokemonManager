import usePokeStore from "../hooks/usePokeStore";
import type { Pokemon } from "../api/pokemon-search-api";

export type Team = {
    id: string;
    name: string;
    pokemons: Pokemon[];
};

export type AddResult = { ok: boolean; reason?: "full" | "duplicate" | "not-found" };

export const useTeamsContext = () => {
    const teams = usePokeStore((s) => s.teams);
    const createTeam = usePokeStore((s) => s.createTeam);
    const addPokemonToTeam = usePokeStore((s) => s.addPokemonToTeam);
    const removePokemonFromTeam = usePokeStore((s) => s.removePokemonFromTeam);
    const removeTeam = usePokeStore((s) => s.removeTeam);

    return { teams, createTeam, addPokemonToTeam, removePokemonFromTeam, removeTeam } as const;
};

export const MAX_TEAM_SIZE = 4;
