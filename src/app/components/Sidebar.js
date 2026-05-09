'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  ListTodo,
  Brain,
} from 'lucide-react'

const menu = [
  {
    name: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'My Tasks',
    path: '/tasks',
    icon: ListTodo,
  },
  {
    name: 'My Routines',
    path: '/routines',
    icon: Brain,
  },
  {
    name: 'Calendar',
    path: '/calendar',
    icon: Calendar,
  },
  {
    name: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <div className="w-[280px] bg-[#0B1023] border-r border-purple-500/20 p-5 hidden lg:flex flex-col justify-between min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-purple-500 mb-10">
          Smart Routine
        </h1>

        <div className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 bg-[#121933] hover:bg-purple-600 duration-300 p-4 rounded-2xl"
              >
                <Icon size={20} />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>

      
       
      
    </div>
  )
}