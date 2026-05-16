'use client'

import { createContext, useContext, useState } from 'react'

const RoutineContext = createContext()

export function RoutineProvider({ children }) {
  const [routines, setRoutines] = useState([])

  // add task
  const addTask = (task) => {
    setRoutines((prev) => [...prev, task])
  }

  // delete task
  const deleteTask = (id) => {
    setRoutines((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <RoutineContext.Provider value={{ routines, addTask, deleteTask }}>
      {children}
    </RoutineContext.Provider>
  )
}

export const useRoutines = () => useContext(RoutineContext)