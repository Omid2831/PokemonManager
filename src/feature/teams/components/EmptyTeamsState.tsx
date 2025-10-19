import React from "react";

const EmptyTeamsState: React.FC = () => {
    return (
        <div className="text-center py-12">
            {/* the plus button */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No teams yet</h3>
            <p className="text-slate-500">Create your first team to start building your Pokémon roster.</p>
        </div>
    );
};

export default EmptyTeamsState;