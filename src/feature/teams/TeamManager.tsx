import React from "react";
import TeamsHeader from "./components/TeamsHeader";
import CreateTeamForm from "./components/CreateTeamForm";
import EmptyTeamsState from "./components/EmptyTeamsState";
import TeamCard from "./components/TeamCard";
import { useTeamsContext } from "../shared/context/useTeamsContext";

const TeamManager: React.FC = () => {
    const { teams, createTeam, removePokemonFromTeam, removeTeam } = useTeamsContext();

    return (
        <section id="teams" className="py-16 sm:py-20 lg:py-24 bg-[#caedf3ad] w-full min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                <TeamsHeader teamCount={teams.length} />

                <CreateTeamForm onCreateTeam={createTeam} />

                {teams.length === 0 ? (
                    <EmptyTeamsState />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {teams.map((team) => (
                            <TeamCard
                                key={team.id}
                                team={team}
                                onRemovePokemon={(pokemonId) => removePokemonFromTeam(team.id, pokemonId)}
                                onRemoveTeam={() => removeTeam(team.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TeamManager;
