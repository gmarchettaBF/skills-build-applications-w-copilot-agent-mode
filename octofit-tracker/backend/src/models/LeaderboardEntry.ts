import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    activityMinutes: { type: Number, required: true },
    streakDays: { type: Number, required: true },
  },
  { timestamps: true },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);
