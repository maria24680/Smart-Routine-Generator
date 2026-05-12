"use client";
import React from 'react';
import RoutineTable from '../components/RoutineTable';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const RoutinePage = () => {
  return (
    <div className="flex min-h-screen bg-[#070B1D] text-white">
      <Sidebar />
      <div className="flex-1 p-5">
        <Topbar />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6">Full Schedule</h1>
          <RoutineTable />
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;