import React from "react";

type TeamsHeaderProps = {
    teamCount: number;
};

const TeamsHeader: React.FC<TeamsHeaderProps> = ({ teamCount }) => {
    return (
        <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
                <h2 className="text-3xl font-bold">Your Teams</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {teamCount}
                </span>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Create teams and build your perfect Pokémon lineup. Each team can hold up to 4 Pokémon.
            </p>
        </div>
    );
};

export default TeamsHeader;