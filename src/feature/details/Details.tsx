
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type Pokemon = {
    id: number;
    name: string;
    height?: number;
    weight?: number;
    sprites?: {
        front_default?: string | null;
        other?: {
            "official-artwork"?: { front_default?: string | null };
        };
    };
    types?: { slot: number; type: { name: string } }[];
    stats?: { base_stat: number; stat: { name: string } }[];
    abilities?: { ability: { name: string }; is_hidden: boolean }[];
};

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();

        const fetchPokemon = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error(`Pokemon not found (${res.status})`);
                const data = await res.json();
                setPokemon(data);
            } catch (e: any) {
                if (e.name !== "AbortError") setError(e.message ?? "Failed to load");
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
        return () => controller.abort();
    }, [id]);

    const statPercent = (value: number) => {
        // Pokemon stats vary, use 255 as an approximate max to produce a bar width
        const pct = Math.round((value / 255) * 100);
        return Math.min(Math.max(pct, 2), 100);
    };

    return (
        <section className="px-6 py-8 max-w-4xl mx-auto">
            <Link to="/" className="inline-block mb-6 text-sm text-gray-600 hover:text-gray-800">← Back</Link>

            {loading && (
                <div className="text-center py-12">Loading...</div>
            )}

            {error && (
                <div className="text-center text-red-600 py-6">{error}</div>
            )}

            {pokemon && (
                <article className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0 w-full md:w-56 flex justify-center items-center">
                            <img
                                src={
                                    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
                                    undefined
                                }
                                alt={pokemon.name}
                                className="w-40 h-40 md:w-52 md:h-52 object-contain"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 w-full">
                            <h1 className="text-3xl font-bold capitalize text-gray-800 mb-2">
                                {pokemon.name} <span className="text-gray-500">#{pokemon.id}</span>
                            </h1>

                            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                                {pokemon.height !== undefined && (
                                    <span>Height: <strong className="text-gray-800">{pokemon.height}</strong></span>
                                )}
                                {pokemon.weight !== undefined && (
                                    <span>Weight: <strong className="text-gray-800">{pokemon.weight}</strong></span>
                                )}
                            </div>

                            {/* Types */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {(pokemon.types || []).map((t) => (
                                    <span
                                        key={t.type.name}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize border`}
                                    >
                                        {t.type.name}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Stats</h3>
                                <div className="space-y-2">
                                    {(pokemon.stats || []).map((s) => (
                                        <div key={s.stat.name}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="capitalize text-gray-700">{s.stat.name}</span>
                                                <span className="text-gray-600">{s.base_stat}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-red-500 h-2 rounded-full"
                                                    style={{ width: `${statPercent(s.base_stat)}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Abilities */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Abilities</h3>
                                <div className="flex flex-wrap gap-2">
                                    {(pokemon.abilities || []).map((a) => (
                                        <span
                                            key={a.ability.name}
                                            className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium capitalize"
                                        >
                                            {a.ability.name}
                                            {a.is_hidden ? " (hidden)" : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )}
        </section>
    );
};

export default Details;
