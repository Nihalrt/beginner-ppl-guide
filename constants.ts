import { WorkoutDayData } from './types';

export const WORKOUT_DATA: Record<string, WorkoutDayData> = {
  push: {
    id: 'push',
    title: 'Push Day',
    description: 'Focus on the pushing muscles: Chest, Shoulders, and Triceps.',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    exercises: [
      {
        id: 'push-1',
        name: 'Push-Ups',
        image: './push-ups.jpg',
        description: 'A fundamental compound movement. Keep your body in a straight line from head to heels. Lower yourself until your chest nearly touches the floor.',
        tip: 'Keep your elbows at a 45-degree angle to your body to protect your shoulders.'
      },
      {
        id: 'push-2',
        name: 'Overhead Press',
        image: './overhead-press.jpg',
        description: 'Press the weight vertically overhead. This exercise targets the entire shoulder girdle and upper chest.',
        tip: 'Engage your core and squeeze your glutes to prevent arching your back.'
      },
      {
        id: 'push-3',
        name: 'Tricep Dips',
        image: './tricep-dips.jpeg',
        description: 'Lower your body by bending your elbows until they are at about a 90-degree angle, then press back up.',
        tip: 'Keep your torso upright to focus on triceps; lean forward to engage more chest.'
      }
    ],
    quiz: [
      {
        question: "Which muscle group is NOT a primary focus of Push Day?",
        options: ["Chest", "Triceps", "Biceps", "Shoulders"],
        correctAnswer: 2,
        explanation: "Biceps are a pulling muscle, trained on Pull Day. Push day focuses on Chest, Shoulders, and Triceps."
      }
    ]
  },
  pull: {
    id: 'pull',
    title: 'Pull Day',
    description: 'Focus on the pulling muscles: Back and Biceps.',
    muscles: ['Back', 'Biceps', 'Rear Delts'],
    exercises: [
      {
        id: 'pull-1',
        name: 'Lat Pulldown',
        image: './lat-pulldown.jpg',
        description: 'Pull the bar down towards your upper chest. Focus on driving your elbows down and back.',
        tip: 'Think about pulling with your elbows, not your hands, to better engage the lats.'
      },
      {
        id: 'pull-2',
        name: 'Dumbbell Row',
        image: './dumbbell-row.jpg',
        description: 'With one hand on a bench for support, pull the dumbbell up to your hip.',
        tip: 'Keep your back flat and avoid rotating your torso as you lift the weight.'
      },
      {
        id: 'pull-3',
        name: 'Face Pulls',
        image: './face-pulls.jpg',
        description: 'Pull the rope towards your forehead, separating your hands as you get close to your face.',
        tip: 'This is great for shoulder health. Focus on the squeeze at the back, not the weight amount.'
      }
    ],
    quiz: [
      {
        question: "What is the primary movement pattern on Pull Day?",
        options: ["Pushing away from the body", "Pulling towards the body", "Squatting", "Jumping"],
        correctAnswer: 1,
        explanation: "Pull Day focuses on bringing resistance towards your center of mass, engaging the back and biceps."
      }
    ]
  },
  legs: {
    id: 'legs',
    title: 'Leg Day',
    description: 'Focus on the lower body: Quads, Hamstrings, Glutes, and Calves.',
    muscles: ['Quads', 'Hamstrings', 'Glutes'],
    exercises: [
      {
        id: 'legs-1',
        name: 'Goblet Squat',
        image: './goblet-squat.jpg',
        description: 'Hold a weight at chest level and squat down, keeping your chest up and knees tracking over your toes.',
        tip: 'Imagine sitting back into a chair. Go as deep as your mobility allows without rounding your back.'
      },
      {
        id: 'legs-2',
        name: 'Romanian Deadlift',
        image: './romanian-deadlift.jpg',
        description: 'Hinge at the hips to lower the weight while keeping your legs mostly straight (slight bend).',
        tip: 'Stop when you feel a deep stretch in your hamstrings; do not rely on your lower back to pull up.'
      },
      {
        id: 'legs-3',
        name: 'Lunges',
        image: './lunges.jpg',
        description: 'Step forward and lower your hips until both knees are bent at approximately a 90-degree angle.',
        tip: 'Keep your front heel planted firmly on the ground to engage the glutes.'
      }
    ],
    quiz: [
      {
        question: "Which exercise primarily targets the Hamstrings?",
        options: ["Goblet Squat", "Romanian Deadlift", "Leg Extension", "Calf Raise"],
        correctAnswer: 1,
        explanation: "The Romanian Deadlift is a hip-hinge movement that heavily emphasizes the hamstrings and glutes."
      }
    ]
  }
};