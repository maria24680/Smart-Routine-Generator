'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const DEFAULT_COLORS = ['#8B5CF6', '#312E81']

export default function ProductivityChart({
  title = 'Productivity',
  data = [
    { name: 'Focused', value: 85 },
    { name: 'Remaining', value: 15 },
  ],
  colors = DEFAULT_COLORS,
}) {
  return (
    <div className="bg-[#121933] p-5 rounded-3xl border border-purple-500/10">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}