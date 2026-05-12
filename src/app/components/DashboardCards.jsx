'use client'

export default function DashboardCards({
  cards = [],
  className = '',
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ${className}`}
    >
      {cards.map((card, index) => (
        <div
          key={card.title || index}
          className="bg-[#121933] p-6 rounded-3xl border border-purple-500/10"
        >
          <h2 className="text-gray-400">{card.title}</h2>
          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  )
}

