'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from 'recharts'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const data = [
  {
    name: 'Focused',
    value: 70,
  },
  {
    name: 'Break',
    value: 20,
  },
  {
    name: 'Remaining',
    value: 10,
  },
]

const weeklyData = [
  {
    day: 'Mon',
    hours: 4,
  },
  {
    day: 'Tue',
    hours: 6,
  },
  {
    day: 'Wed',
    hours: 5,
  },
  {
    day: 'Thu',
    hours: 8,
  },
  {
    day: 'Fri',
    hours: 7,
  },
]

const COLORS = ['#7C3AED', '#3B82F6', '#F59E0B']

export default function Page() {
  return (
 <div className="flex min-h-screen bg-[#070B1D] text-white">
      <Sidebar />
      <div className="flex-1 p-5">
        <Topbar />
        <div className="mt-8">
          <div className="min-h-screen bg-[#070B1D] text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-400 mt-2">
          Track your productivity and study progress
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#11182E] rounded-3xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-6">
            Productivity Overview
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#11182E] rounded-3xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-6">
            Weekly Study Hours
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="#fff" />
                <Tooltip />
                <Bar
                  dataKey="hours"
                  fill="#7C3AED"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
          
        </div>
      </div>
    </div>

   
  )
}