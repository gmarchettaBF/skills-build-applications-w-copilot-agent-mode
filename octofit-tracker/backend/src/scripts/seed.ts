import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      {
        name: 'Velocity Vipers',
        mascot: 'Viper',
        memberNames: ['Maya Chen', 'Jordan Brooks'],
        weeklyGoalMinutes: 900,
        city: 'San Francisco',
      },
      {
        name: 'Core Crushers',
        mascot: 'Kettlebell',
        memberNames: ['Avery Patel', 'Sam Rivera'],
        weeklyGoalMinutes: 780,
        city: 'Austin',
      },
      {
        name: 'Summit Sprinters',
        mascot: 'Mountain',
        memberNames: ['Taylor Morgan'],
        weeklyGoalMinutes: 600,
        city: 'Denver',
      },
    ]);

    await User.insertMany([
      {
        username: 'mchen',
        displayName: 'Maya Chen',
        email: 'maya.chen@example.com',
        teamName: 'Velocity Vipers',
        fitnessGoal: 'Build endurance for a half marathon',
        joinedAt: new Date('2026-01-12T09:00:00.000Z'),
      },
      {
        username: 'jbrooks',
        displayName: 'Jordan Brooks',
        email: 'jordan.brooks@example.com',
        teamName: 'Velocity Vipers',
        fitnessGoal: 'Improve strength and mobility',
        joinedAt: new Date('2026-02-03T14:30:00.000Z'),
      },
      {
        username: 'apatel',
        displayName: 'Avery Patel',
        email: 'avery.patel@example.com',
        teamName: 'Core Crushers',
        fitnessGoal: 'Increase functional strength',
        joinedAt: new Date('2026-02-19T18:15:00.000Z'),
      },
      {
        username: 'srivera',
        displayName: 'Sam Rivera',
        email: 'sam.rivera@example.com',
        teamName: 'Core Crushers',
        fitnessGoal: 'Stay consistent with weekly workouts',
        joinedAt: new Date('2026-03-08T11:45:00.000Z'),
      },
      {
        username: 'tmorgan',
        displayName: 'Taylor Morgan',
        email: 'taylor.morgan@example.com',
        teamName: 'Summit Sprinters',
        fitnessGoal: 'Train for mountain trail races',
        joinedAt: new Date('2026-03-21T07:20:00.000Z'),
      },
    ]);

    await Activity.insertMany([
      {
        userName: 'Maya Chen',
        teamName: 'Velocity Vipers',
        activityType: 'Run',
        durationMinutes: 52,
        caloriesBurned: 510,
        activityDate: new Date('2026-07-01T13:00:00.000Z'),
        notes: 'Tempo run with negative splits',
      },
      {
        userName: 'Jordan Brooks',
        teamName: 'Velocity Vipers',
        activityType: 'Strength Training',
        durationMinutes: 45,
        caloriesBurned: 360,
        activityDate: new Date('2026-07-02T22:30:00.000Z'),
        notes: 'Upper body push and pull session',
      },
      {
        userName: 'Avery Patel',
        teamName: 'Core Crushers',
        activityType: 'Cycling',
        durationMinutes: 68,
        caloriesBurned: 640,
        activityDate: new Date('2026-07-03T12:15:00.000Z'),
        notes: 'Hill intervals on the greenway',
      },
      {
        userName: 'Sam Rivera',
        teamName: 'Core Crushers',
        activityType: 'Yoga',
        durationMinutes: 35,
        caloriesBurned: 150,
        activityDate: new Date('2026-07-04T16:45:00.000Z'),
        notes: 'Recovery flow and hip mobility',
      },
      {
        userName: 'Taylor Morgan',
        teamName: 'Summit Sprinters',
        activityType: 'Trail Run',
        durationMinutes: 75,
        caloriesBurned: 820,
        activityDate: new Date('2026-07-05T14:10:00.000Z'),
        notes: 'Rocky ridge climb with steady effort',
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        userName: 'Taylor Morgan',
        teamName: 'Summit Sprinters',
        rank: 1,
        points: 1450,
        activityMinutes: 420,
        streakDays: 18,
      },
      {
        userName: 'Maya Chen',
        teamName: 'Velocity Vipers',
        rank: 2,
        points: 1325,
        activityMinutes: 390,
        streakDays: 14,
      },
      {
        userName: 'Avery Patel',
        teamName: 'Core Crushers',
        rank: 3,
        points: 1210,
        activityMinutes: 365,
        streakDays: 11,
      },
      {
        userName: 'Jordan Brooks',
        teamName: 'Velocity Vipers',
        rank: 4,
        points: 990,
        activityMinutes: 285,
        streakDays: 8,
      },
      {
        userName: 'Sam Rivera',
        teamName: 'Core Crushers',
        rank: 5,
        points: 875,
        activityMinutes: 240,
        streakDays: 6,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Endurance Builder Run',
        focusArea: 'Cardio',
        difficulty: 'Intermediate',
        durationMinutes: 50,
        recommendedForGoal: 'Build endurance for a half marathon',
        exercises: ['10 minute warmup jog', '30 minute steady run', '6 stride repeats', 'Cooldown walk'],
      },
      {
        title: 'Functional Strength Circuit',
        focusArea: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 40,
        recommendedForGoal: 'Increase functional strength',
        exercises: ['Goblet squats', 'Pushups', 'Kettlebell swings', 'Farmer carries'],
      },
      {
        title: 'Mobility Reset',
        focusArea: 'Recovery',
        difficulty: 'Beginner',
        durationMinutes: 25,
        recommendedForGoal: 'Improve strength and mobility',
        exercises: ['Cat cow', 'Worlds greatest stretch', 'Hip airplanes', 'Thoracic rotations'],
      },
      {
        title: 'Trail Climb Prep',
        focusArea: 'Outdoor Conditioning',
        difficulty: 'Advanced',
        durationMinutes: 60,
        recommendedForGoal: 'Train for mountain trail races',
        exercises: ['Incline treadmill hike', 'Step ups', 'Single leg deadlifts', 'Downhill stride practice'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
