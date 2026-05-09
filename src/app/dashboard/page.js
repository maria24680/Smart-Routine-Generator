"use client";
import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [routine, setRoutine] = useState([]);

  const addTask = () => {
    setTasks([...tasks, { name: "", priority: 1 }]);
  };

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(tasks),
    });
    const data = await res.json();
    setRoutine(data);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <button onClick={addTask} className="btn">Add Task</button>

      {tasks.map((t, i) => (
        <input
          key={i}
          placeholder="Task"
          onChange={(e) => {
            const newTasks = [...tasks];
            newTasks[i].name = e.target.value;
            setTasks(newTasks);
          }}
        />
      ))}

      <button onClick={generate}>Generate Routine</button>

      <div>
        {routine.map((r, i) => (
          <p key={i}>{r.time} → {r.task}</p>
        ))}
      </div>
    </div>
  );
}