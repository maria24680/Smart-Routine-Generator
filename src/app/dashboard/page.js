"use client";

import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(false);

  // Add New Task
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        name: "",
        priority: 1,
      },
    ]);
  };

  // Update Task
  const updateTask = (index, field, value) => {
    const updated = [...tasks];
    updated[index][field] = value;
    setTasks(updated);
  };

  // Generate Routine
  const generate = async () => {
    if (tasks.length === 0) {
      alert("Please add tasks first");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tasks),
      });

      const data = await res.json();

      setRoutine(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Smart Routine Generator
        </h1>

        {/* Add Task Button */}
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mb-5"
        >
          + Add Task
        </button>

        {/* Tasks */}
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-4 rounded-xl flex gap-4"
            >
              {/* Task Name */}
              <input
                type="text"
                placeholder="Enter task..."
                value={task.name}
                onChange={(e) =>
                  updateTask(index, "name", e.target.value)
                }
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 outline-none"
              />

              {/* Priority */}
              <select
                value={task.priority}
                onChange={(e) =>
                  updateTask(index, "priority", Number(e.target.value))
                }
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2"
              >
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </select>
            </div>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={generate}
          disabled={loading}
          className="mt-6 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold"
        >
          {loading ? "Generating..." : "Generate Routine"}
        </button>

        {/* Routine Output */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Generated Routine
          </h2>

          <div className="space-y-3">
            {routine.map((r, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-4 rounded-xl border border-zinc-800"
              >
                <p className="text-lg">
                  <span className="font-bold text-green-400">
                    {r.time}
                  </span>{" "}
                  → {r.task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}