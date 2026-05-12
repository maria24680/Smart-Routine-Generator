"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const prevMonthDays = new Date(
    year,
    month,
    0
  ).getDate();

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const calendarDays = [];

  for (let i = firstDay; i > 0; i--) {
    calendarDays.push({
      day: prevMonthDays - i + 1,
      current: false,
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push({
      day: i,
      current: true,
    });
  }

  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day:
        calendarDays.length -
        totalDays -
        firstDay +
        1,
      current: false,
    });
  }

  const today = new Date();

  return (
    <div className="bg-[#111827] rounded-3xl p-5 border border-purple-500/10 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          {months[month]} {year}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="bg-[#1a2140] hover:bg-purple-600 transition p-2 rounded-xl"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextMonth}
            className="bg-[#1a2140] hover:bg-purple-600 transition p-2 rounded-xl"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm text-gray-400 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((date, index) => {
          const isToday =
            date.day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear() &&
            date.current;

          return (
            <div
              key={index}
              className={`
                h-12 flex items-center justify-center
                rounded-xl cursor-pointer transition
                text-sm font-medium

                ${
                  date.current
                    ? "bg-[#1a2140] hover:bg-purple-600"
                    : "bg-[#0f172a] text-gray-500"
                }

                ${
                  isToday
                    ? "bg-purple-600 text-white font-bold scale-105"
                    : ""
                }
              `}
            >
              {date.day}
            </div>
          );
        })}
      </div>

      
      
    </div>
  );
}