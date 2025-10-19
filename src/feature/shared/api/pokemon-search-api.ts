// Define the base URL for the Pokémon API
const POKEMON_API_URL: URL = new URL('https://pokeapi.co/api/v2/pokemon/');

// types for the API response (minimal fields we use)
export type PokemonSprites = {
    front_default?: string;
    
};

export type Pokemon = {
    Types: any;
    id: number;
    name: string;
    sprites?: PokemonSprites;
    url?: string; // present on list endpoints
    types?: { type: { name: string } }[];
    abilities?: { ability: { name: string } }[];
};

// Fetching the data from the API
const fetchPokemon = async (query: string): Promise<Pokemon | null> => {
    try {
        const response = await fetch(`${POKEMON_API_URL}${query.toLowerCase()}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Pokemon = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
}

export { fetchPokemon };

export default POKEMON_API_URL;

