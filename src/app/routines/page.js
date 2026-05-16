"use client";

import React from "react";
import RoutineTable from "../components/RoutineTable";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useRoutines } from "@/context/RoutineContext";

const RoutinePage = () => {
  const { routines = [] } = useRoutines();

  return (
    <div className="flex min-h-screen bg-[#070B1D] text-white">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 p-5">
        
        {/* TOPBAR */}
        <Topbar />

        {/* HEADER */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6">
            Full Schedule
          </h1>

          {/* ROUTINE TABLE (IMPORTANT FIX) */}
          <RoutineTable routine={routines} />
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;