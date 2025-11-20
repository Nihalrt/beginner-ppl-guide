import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [hasError, setHasError] = useState(false);

  // Reset error state if the exercise prop changes or image path updates.
  useEffect(() => {
    setHasError(false);
  }, [exercise.image, exercise.id]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
       console.warn(`Failed to load image: ${exercise.image}`);
       setHasError(true);
    }
  };

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8 hover:shadow-md transition-shadow duration-300">
      {/* Modality Principle: Image beside text on larger screens, stacked on mobile */}
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-5/12 h-64 md:h-auto md:min-h-[320px] bg-gray-100 relative overflow-hidden">
          {!hasError ? (
            <img 
              key={exercise.image} /* Force re-render on image change */
              src={exercise.image} 
              alt={exercise.name}
              className="w-full h-full object-cover object-center block"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500 p-4 text-center absolute inset-0">
              <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Image not found</span>
              <span className="text-xs opacity-75 mt-1 font-mono truncate max-w-[80%]">{exercise.image}</span>
            </div>
          )}
        </div>

        {/* Text Section - Contiguity Principle: Text is immediately adjacent to visual */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{exercise.name}</h3>
          
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {exercise.description}
          </p>

          {/* Signaling Principle: "Quick Tip" is visually highlighted to draw attention to key info */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-auto">
            <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-1 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Quick Tip
            </h4>
            <p className="text-blue-800 text-base font-medium">
              {exercise.tip}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;