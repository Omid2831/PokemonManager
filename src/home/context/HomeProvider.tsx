import React from "react";
import { SearchProvider } from "./SearchContext";
import { PlayerProvider } from "./PlayerContext";

export const HomeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <SearchProvider>
            <PlayerProvider>{children}</PlayerProvider>
        </SearchProvider>
    );
};

export * from "./SearchContext";
export * from "./PlayerContext";
