import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Pokemon } from "../api/pokemon-search-api";

// Align types with the existing TeamContext contract
export type Team = {
  id: string;
  name: string;
  pokemons: Pokemon[];
};

export type AddResult = {
  ok: boolean;
  reason?: "full" | "duplicate" | "not-found"
};

type StoreState = {
  teams: Team[];
  createTeam: (name: string) => void;
  addPokemonToTeam: (teamId: string | number, pokemon: Pokemon) => AddResult;
  removePokemonFromTeam: (teamId: string | number, pokemonId: number) => void;
  removeTeam: (teamId: string | number) => void;
  clearTeams: () => void;

  //  new types for favorites
  favorites: Pokemon[];
  toggleFavorite: (pokemon: Pokemon) => void;
  isFavorite: (pokemonId: number) => boolean;
  clearFavorites: () => void;
};



{/* Maximum number of pokemon in a Team */ }
const MAX_POKEMON_PER_TEAM = 4;

const usePokeStore = create<StoreState>()(
  persist<StoreState>(
    (set, get) => ({

      // Initial state for teams is empty array and will be populated as user creates teams
      teams: [],

      // Create a new Team and persist it to be used later
      createTeam: (name: string) => {
        // Preventing creation of Teams with empty names or just spaces
        const trimmed = name.trim();
        // if the name is empty after trimming, return nothing
        if (!trimmed) return;

        // Create a new team object with the provided id and name
        const newTeam: Team = {
          // Uniqque Id for each team
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          // Name provided by user
          name: trimmed,
          // Start with empty pokemon list for the team
          pokemons: [],
        };
        // Add the new team to the existing List of teams
        set((state) => ({ teams: [...state.teams, newTeam] }));
      },
      // Add a pokemon to a specific team by its id and returning the result of the operation
      addPokemonToTeam: (teamId: string | number, pokemon: Pokemon) => {

        let result: AddResult = { ok: false };
        set((state) => ({
          teams: state.teams.map((team) => {
            if (team.id !== teamId) return team;

            const exists = team.pokemons.some((p) => p.id === pokemon.id);
            if (exists) {
              result = { ok: false, reason: "duplicate" };
              return team;
            }
            if (team.pokemons.length >= MAX_POKEMON_PER_TEAM) {
              result = { ok: false, reason: "full" };
              return team;
            }
            result = { ok: true };
            return { ...team, pokemons: [...team.pokemons, pokemon] };
          }),
        }));

        // if no team matched
        const found = get().teams.some((t) => t.id === teamId);
        if (!found) result = { ok: false, reason: "not-found" };
        return result;
      },
      // Remove a pokemon from a specific team by its id
      removePokemonFromTeam: (teamId: string | number, pokemonId: number) =>
        set((state) => ({
          teams: state.teams.map((team) =>
            team.id === teamId
              ? { ...team, pokemons: team.pokemons.filter((p) => p.id !== pokemonId) }
              : team
          ),
        })),
        
      // Remove an entire team by its id
      removeTeam: (teamId: string | number) =>
        set((state) => ({ teams: state.teams.filter((t) => t.id !== teamId) })),

      // Clear all teams for whenever you login/logout or reset
      clearTeams: () => set({ teams: [] }),

      // 🧡 FAVORITE SYSTEM
      favorites: [],

      toggleFavorite: (pokemon) =>
        set((state) => {
          const exists = state.favorites.some((p) => p.id === pokemon.id);
          if (exists) {
            return { favorites: state.favorites.filter((p) => p.id !== pokemon.id) };
          }
          return { favorites: [...state.favorites, pokemon] };
        }),

      isFavorite: (pokemonId) =>
        get().favorites.some((p) => p.id === pokemonId),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "pokemon-teams-storage",
    }
  )
);

export default usePokeStore;
