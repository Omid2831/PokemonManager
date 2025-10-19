import React from "react";
import SearchBar from "./components/SearchBar";
import PokemonPlayer from "../feature/Player/PokemonPlayer";
import { useSearch } from "./context/HomeProvider";
import { useTeamsContext } from "../feature/shared/context/useTeamsContext";


const Home: React.FC = () => {
    const { setQuery, pokemon, loading, error } = useSearch();
    const { teams, addPokemonToTeam } = useTeamsContext();


    return (
        <main className="bg-[#cadef3ad] min-h-screen">
            <section id="search" className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Build Your Pokémon Team</h1>
                        <p className="text-slate-600 mb-5">Search a Pokémon by name and add it to your team of up to 4.</p>
                        <div className="max-w-3xl mx-auto">
                            <SearchBar onSearch={setQuery} />
                        </div>
                    </div>

                    {/* Render result if found */}
                    {loading && <p className="mt-6 text-center text-gray-500">Loading…</p>}
                    {error && !loading && <p className="mt-6 text-center text-red-600">{error}</p>}
                    {!loading && pokemon ? (
                        <PokemonPlayer pokemon={pokemon} teams={teams} addPokemonToTeam={addPokemonToTeam} />
                    ) : !loading ? (
                        <>
                            <p className="mt-6 warning text-center text-gray-500">Search for a Pokémon to see its details.</p>
                        </>
                    ) : null}
                </div>
            </section>
        </main>
    );
};

export default Home;
