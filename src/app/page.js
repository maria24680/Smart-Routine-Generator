'use client'

import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardCards from './components/DashboardCards'
import RoutineTable from './components/RoutineTable'
import ProductivityChart from './components/ProductivityChart'
import AISuggestion from './components/AISuggestion'
import Navbar from './components/Navbar'
import CalendarWidget from './components/CalendarWidget'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [routine, setRoutine] = useState([])
  const [loading, setLoading] = useState(false)

  // add task
  const addTask = () => {
    setTasks([...tasks, { name: '', priority: 1 }])
  }

  // update task
  const updateTask = (index, field, value) => {
    const updated = [...tasks]
    updated[index][field] = value
    setTasks(updated)
  }

  // generate routine
  const generate = async () => {
    if (tasks.length === 0) return alert('Add tasks first')

    setLoading(true)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tasks),
      })

      const data = await res.json()
      setRoutine(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // 🎯 DYNAMIC CARDS (AUTO UPDATE)
  const cards = [
    { title: 'Total Tasks', value: tasks.length },
    { title: 'Generated Routine', value: routine.length },
    {
      title: 'High Priority',
      value: tasks.filter(t => t.priority === 3).length,
    },
    {
      title: 'Completed Steps',
      value: routine.length > 0 ? routine.length : 0,
    },
  ]

  return (
    <div className="flex min-h-screen bg-[#070B1D] text-white">
      <Sidebar />

      <div className="flex-1 p-5">
        <Topbar />

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-100 rounded-3xl p-8 text-black mt-5">
          <h1 className="text-4xl font-bold">Good Morning</h1>
          <p className="text-lg mt-2">
            Let’s make today productive and amazing.
          </p>
        </div>

        <Navbar />

        {/* ADD TASK UI */}
        <div className="mt-5">
          <button
            onClick={addTask}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            + Add Task
          </button>

          <button
            onClick={generate}
            disabled={loading}
            className="ml-3 bg-green-600 px-4 py-2 rounded-lg"
          >
            {loading ? 'Generating...' : 'Generate Routine'}
          </button>

          {/* TASK LIST */}
          <div className="mt-4 space-y-3">
            {tasks.map((task, index) => (
              <div key={index} className="flex gap-3">
                <input
                  value={task.name}
                  onChange={(e) =>
                    updateTask(index, 'name', e.target.value)
                  }
                  className="bg-zinc-800 px-3 py-2 rounded"
                  placeholder="Task name"
                />

                <select
                  value={task.priority}
                  onChange={(e) =>
                    updateTask(index, 'priority', Number(e.target.value))
                  }
                  className="bg-zinc-800 px-2 py-2 rounded"
                >
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={3}>High</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 DYNAMIC CARDS */}
        <DashboardCards cards={cards} />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <div className="lg:col-span-2">
            <RoutineTable routine={routine} />
          </div>

          <div className="space-y-5">
            <CalendarWidget />
            <ProductivityChart />
            <AISuggestion />
          </div>
        </div>
      </div>
    </div>
  )
}