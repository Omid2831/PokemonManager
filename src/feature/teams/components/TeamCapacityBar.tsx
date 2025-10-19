import React from "react";

type TeamCapacityBarProps = {
    currentCount: number;
    maxCount: number;
};

const TeamCapacityBar: React.FC<TeamCapacityBarProps> = ({ currentCount, maxCount }) => {
    const percentage = (currentCount / maxCount) * 100;

    return (
        <div className="mb-5">
            <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Team Capacity</span>
                <span>{currentCount}/{maxCount}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-800 h-2 rounded-full transition-all duration-300 make-it-smooth"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};
    
export default TeamCapacityBar;