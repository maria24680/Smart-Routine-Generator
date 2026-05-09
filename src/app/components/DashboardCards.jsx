export default function DashboardCards() {
  const cards = [
    {
      title: 'Total Tasks',
      value: '12',
    },
    {
      title: 'Completed',
      value: '8',
    },
    {
      title: 'Study Hours',
      value: '6.5h',
    },
    {
      title: 'Productivity',
      value: '85%',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#121933] p-6 rounded-3xl border border-purple-500/10"
        >
          <h2 className="text-gray-400">{card.title}</h2>
          <h1 className="text-4xl font-bold mt-3">{card.value}</h1>
        </div>
      ))}
    </div>
  )
}