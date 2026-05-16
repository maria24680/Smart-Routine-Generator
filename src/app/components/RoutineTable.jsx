"use client";

import {
  BookOpen,
  Brain,
  Code2,
  Database,
  Coffee,
  Star,
} from "lucide-react";

/* ✅ MUST BE ABOVE COMPONENT */
const iconMap = {
  BookOpen,
  Brain,
  Code2,
  Database,
  Coffee,
  Star,
};

export default function RoutineTable({ routine = [] }) {
  return (
    <div className="bg-[#121933] p-5 rounded-2xl">
      
      <h2 className="text-xl font-bold mb-4 text-white">
        Routine
      </h2>

      {routine.length === 0 ? (
        <p className="text-gray-400">
          No routine generated yet
        </p>
      ) : (
        routine.map((r, i) => {
          
          const Icon = iconMap[r.icon] || Star;

          return (
            <div
              key={r.id || i}
              className="p-3 border-b border-gray-700 flex items-center gap-3"
            >
              <div className="text-purple-400">
                <Icon size={18} />
              </div>

              <div className="text-white">
                {r.time} → {r.task || r.title}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}