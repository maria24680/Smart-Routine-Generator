"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RoutineContext = createContext();

const initialRoutines = [
  { id: 1, time: "08:00 AM - 09:30 AM", title: "Data Structures", priority: "High", icon: "BookOpen", color: "bg-pink-500/20 text-pink-400", dot: "bg-pink-500" },
];

export function RoutineProvider({ children }) {
  const [routines, setRoutines] = useState([]); // Start empty to match server
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage ONLY after mounting on the client
  useEffect(() => {
    const saved = localStorage.getItem("shared_routines");
    if (saved) {
      setRoutines(JSON.parse(saved));
    } else {
      setRoutines(initialRoutines);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever routines change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("shared_routines", JSON.stringify(routines));
    }
  }, [routines, isLoaded]);

  const addTask = (task) => setRoutines((prev) => [...prev, task]);
  const deleteTask = (id) => setRoutines((prev) => prev.filter(r => r.id !== id));

  return (
    <RoutineContext.Provider value={{ routines, addTask, deleteTask }}>
      {children}
    </RoutineContext.Provider>
  );
}

export const useRoutines = () => useContext(RoutineContext);