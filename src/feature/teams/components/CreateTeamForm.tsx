import React, { useState } from "react";

type CreateTeamFormProps = {
    onCreateTeam: (name: string) => void;
};

const CreateTeamForm: React.FC<CreateTeamFormProps> = ({ onCreateTeam }) => {
    const [teamName, setTeamName] = useState("");

    const handleCreate = () => {
        if (teamName.trim()) {
            onCreateTeam(teamName.trim());
            setTeamName("");
        }
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleCreate();
    };

    return (
        <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
                <div className="flex-1">
                    <input
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="Enter team name"
                        className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>
                <button
                    onClick={handleCreate}
                    className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-150 font-medium shadow-sm hover:shadow-md"
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreateTeamForm;