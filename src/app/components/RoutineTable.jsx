
export default function RoutineTable({ routine = [] }) {
  return (
    <div className="bg-[#121933] p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Routine</h2>

      {routine.length === 0 ? (
        <p className="text-gray-400">No routine generated yet</p>
      ) : (
       routine.map((r, i) => {
  const Icon = iconMap[r.icon] || Star

  return (
    <div key={i} className="p-3 border-b border-gray-700 flex items-center gap-3">
      
      {/* ICON */}
      <div className="text-purple-400">
        <Icon size={18} />
      </div>

      {/* TEXT */}
      <div>
        {r.time} → {r.task}
      </div>

    </div>
  )
})
      )}
    </div>
  )
}