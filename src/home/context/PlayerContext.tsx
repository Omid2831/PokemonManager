import React, { createContext, useContext, useState } from "react";

type PlayerState = {
    selectedTeamId: string;
    setSelectedTeamId: (id: string) => void;
};

// Create the context for player state
const PlayerCtx = createContext<PlayerState | undefined>(undefined);

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [selectedTeamId, setSelectedTeamId] = useState("");
    return (
        <PlayerCtx.Provider value={{ selectedTeamId, setSelectedTeamId }}>
            {children}
        </PlayerCtx.Provider>
    );
};

export const usePlayer = () => {
    const ctx = useContext(PlayerCtx);
    if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
    return ctx;
};
