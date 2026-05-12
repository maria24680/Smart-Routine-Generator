"use client";

import { useState } from "react";

import {
  Sparkles,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const suggestions = [
  "You focus better in the morning. Schedule Algorithms before noon.",

  "Take a 15 minute break after every 90 minutes of study.",

  "Practice coding at night for better concentration.",

  "Complete difficult subjects before lunch.",

  "Revise Data Structures before sleeping.",

  "Drink more water during long study sessions.",

  "Use Pomodoro technique to improve productivity.",

  "Start your day with high-priority tasks.",
];

export default function AiSuggestion() {
  const [currentSuggestion, setCurrentSuggestion] =
    useState(suggestions[0]);

  const [applied, setApplied] = useState(false);

  /* GENERATE NEW SUGGESTION */
  const generateSuggestion = () => {
    const random =
      suggestions[
        Math.floor(Math.random() * suggestions.length)
      ];

    setCurrentSuggestion(random);

    setApplied(false);
  };

  /* APPLY */
  const applySuggestion = () => {
    setApplied(true);
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 rounded-3xl shadow-2xl border border-white/10">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-3 rounded-2xl">
          <Sparkles size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Suggestion
          </h2>

          <p className="text-sm text-gray-200">
            Smart productivity tips
          </p>
        </div>
      </div>

      {/* SUGGESTION */}
      <div className="mt-6 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

        <p className="text-gray-100 leading-7">
          {currentSuggestion}
        </p>
      </div>

      {/* STATUS */}
      {applied && (
        <div className="mt-4 flex items-center gap-2 text-green-300">
          <CheckCircle2 size={18} />

          <span className="text-sm font-medium">
            Suggestion Applied Successfully
          </span>
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6">

        {/* APPLY */}
        <button
          onClick={applySuggestion}
          className="flex-1 bg-white text-black py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Apply Suggestion
        </button>

        {/* GENERATE */}
        <button
          onClick={generateSuggestion}
          className="bg-black/20 hover:bg-black/30 transition px-5 rounded-2xl flex items-center justify-center"
        >
          <RefreshCcw size={20} />
        </button>
      </div>
    </div>
  );
}