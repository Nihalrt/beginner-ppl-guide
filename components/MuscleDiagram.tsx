import React from 'react';

interface MuscleDiagramProps {
  activeMuscles: string[];
}

const MuscleDiagram: React.FC<MuscleDiagramProps> = ({ activeMuscles }) => {
  // Helper to determine color
  const getColor = (muscle: string) => {
    return activeMuscles.some(m => m.toLowerCase().includes(muscle.toLowerCase())) 
      ? '#2563eb' // Accent color (Blue)
      : '#e5e7eb'; // Gray-200
  };

  return (
    <div className="w-full flex justify-center py-6 bg-gray-50 rounded-xl border border-gray-100 mb-8" aria-label="Muscle diagram showing active muscle groups">
      <div className="relative w-48 h-64">
        <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-sm">
            {/* Abstract Body Silhouette */}
            <g transform="translate(50, 0)">
                {/* Head */}
                <circle cx="50" cy="25" r="15" fill="#d1d5db" />
                
                {/* Torso (Core/Back) */}
                <rect x="25" y="45" width="50" height="90" rx="5" fill={getColor('back')} />
                
                {/* Chest Area */}
                <path d="M 25 45 L 75 45 L 75 80 L 25 80 Z" fill={getColor('chest')} opacity="0.9" />

                {/* Shoulders (Delts) */}
                <circle cx="20" cy="55" r="12" fill={getColor('shoulders')} />
                <circle cx="80" cy="55" r="12" fill={getColor('shoulders')} />

                {/* Arms (Biceps/Triceps) */}
                {/* Left Arm */}
                <rect x="5" y="65" width="12" height="35" rx="4" fill={getColor('triceps')} />
                <rect x="5" y="65" width="12" height="25" rx="4" fill={getColor('biceps')} opacity="0.5" /> {/* Simplified overlap */}
                
                {/* Right Arm */}
                <rect x="83" y="65" width="12" height="35" rx="4" fill={getColor('triceps')} />
                <rect x="83" y="65" width="12" height="25" rx="4" fill={getColor('biceps')} opacity="0.5" />

                {/* Legs (Quads/Hams) */}
                <rect x="25" y="140" width="20" height="80" rx="4" fill={getColor('quads')} />
                <rect x="55" y="140" width="20" height="80" rx="4" fill={getColor('quads')} />
                
                {/* Glutes Area (Upper Leg Back) */}
                <rect x="25" y="135" width="50" height="25" fill={getColor('glutes')} opacity="0.5" />
            </g>
            
            {/* Labels for accessibility/clarity */}
            <text x="100" y="280" textAnchor="middle" className="text-xs fill-gray-500 font-sans uppercase tracking-widest">
              Active Muscles
            </text>
        </svg>
      </div>
      <div className="ml-8 flex flex-col justify-center space-y-2">
          {activeMuscles.map(muscle => (
              <div key={muscle} className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                  <span className="text-sm font-medium text-gray-700">{muscle}</span>
              </div>
          ))}
      </div>
    </div>
  );
};

export default MuscleDiagram;