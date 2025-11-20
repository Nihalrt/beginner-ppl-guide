import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { WORKOUT_DATA } from '../constants';
import ExerciseCard from '../components/ExerciseCard';
import Quiz from '../components/Quiz';
import MuscleDiagram from '../components/MuscleDiagram';

const WorkoutDay: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const data = type ? WORKOUT_DATA[type] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-fade-in">
      <header className="mb-10 text-center md:text-left border-b border-gray-100 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          {data.description}
        </p>
      </header>

      {/* Segmenting: Visual aid at the top */}
      <MuscleDiagram activeMuscles={data.muscles} />

      <section aria-label="Exercises">
        {data.exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </section>

      <section aria-label="Knowledge Check">
          <Quiz questions={data.quiz} />
      </section>
    </div>
  );
};

export default WorkoutDay;