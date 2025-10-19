import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchPokemon, type Pokemon } from "../../feature/shared/api/pokemon-search-api";

type SearchState = {
    query: string;
    setQuery: (q: string) => void;
    pokemon: Pokemon | null;
    loading: boolean;
    error: string | null;
};

// Create the context for search state
const SearchCtx = createContext<SearchState | undefined>(undefined);

export const SearchProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [query, setQuery] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const run = async () => {
            if (!query) return;
            try {
                setLoading(true);
                setError(null);
                const result = await fetchPokemon(query);
                if (!cancelled) {
                    setPokemon(result);
                    if (!result) setError("No Pokémon found");
                }
            } catch (e) {
                if (!cancelled) setError("Failed to fetch Pokémon");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        run();
        return () => {
            cancelled = true;
        };
    }, [query]);

    return (
        <SearchCtx.Provider value={{ query, setQuery, pokemon, loading, error }}>
            {children}
        </SearchCtx.Provider>
    );
};

export const useSearch = () => {
    const ctx = useContext(SearchCtx);
    if (!ctx) throw new Error("useSearch must be used within SearchProvider");
    return ctx;
};
