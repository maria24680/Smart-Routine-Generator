"use client";
import { useState } from "react";
import { useRoutines } from "@/context/RoutineContext";
import {
  BookOpen,
  Brain,
  Code2,
  Database,
  Coffee,
  Star,
  Trash2,
  Plus,
  X,
  Clock,
  Type
} from "lucide-react";

const iconMap = { BookOpen, Brain, Code2, Database, Coffee, Star };

/* Automatically picks an icon based on priority */
const autoIcon = (priority) => {
  switch (priority) {
    case "High": return "Brain";
    case "Medium": return "Code2";
    case "Low": return "BookOpen";
    case "Relax": return "Coffee";
    default: return "Star";
  }
};

export default function RoutineTable() {
  const { routines, addTask, deleteTask } = useRoutines();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    time: "",
    title: "",
    priority: "Medium",
    icon: "Code2",
  });

  const getPriorityStyle = (priority) => {
    const styles = {
      High: { color: "bg-red-500/20 text-red-400", dot: "bg-red-500" },
      Medium: { color: "bg-yellow-500/20 text-yellow-400", dot: "bg-yellow-500" },
      Low: { color: "bg-green-500/20 text-green-400", dot: "bg-green-500" },
      Relax: { color: "bg-blue-500/20 text-blue-400", dot: "bg-blue-500" },
    };
    return styles[priority] || { color: "bg-purple-500/20 text-purple-400", dot: "bg-purple-500" };
  };

  const handlePriorityChange = (e) => {
    const newPriority = e.target.value;
    setFormData({
      ...formData,
      priority: newPriority,
      icon: autoIcon(newPriority) // Sync icon with priority
    });
  };

  const handleAddNew = () => {
    if (!formData.title || !formData.time) return;
    const styles = getPriorityStyle(formData.priority);
    
    addTask({
      id: Date.now(),
      ...formData,
      color: styles.color,
      dot: styles.dot,
    });

    setFormData({ time: "", title: "", priority: "Medium", icon: "Code2" });
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="bg-[#121933] rounded-3xl p-6 border border-purple-500/10 shadow-2xl relative">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Smart Routine</h2>
          <p className="text-gray-400 mt-1">Manage your schedule</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl hover:scale-105 transition"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* TASK LIST */}
      <div className="space-y-5">
        {routines.map((routine, index) => {
          const Icon = iconMap[routine.icon] || Star;
          return (
            <div key={routine.id} className="group bg-[#1A2142] hover:bg-[#232B52] transition-all duration-300 rounded-2xl p-5 flex items-center justify-between border border-transparent hover:border-purple-500/30">
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${routine.dot}`} />
                  {index !== routines.length - 1 && <div className="w-[2px] h-12 bg-gray-700 mt-2" />}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{routine.time}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="bg-[#2D3766] p-2 rounded-lg text-purple-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{routine.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold ${routine.color}`}>{routine.priority}</span>
                <button onClick={() => deleteTask(routine.id)} className="text-gray-500 hover:text-red-400 transition"><Trash2 size={18} /></button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1A2142] border border-white/10 w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Add New Task</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white"><X /></button>
            </div>

            <div className="space-y-4">
              {/* TIME INPUT */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2"><Clock size={14}/> Time Range</label>
                <input
                  type="text"
                  placeholder="e.g. 09:00 AM - 10:30 AM"
                  className="w-full bg-[#0F172A] p-3 rounded-xl outline-none text-white border border-transparent focus:border-purple-500 transition"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>

              {/* SUBJECT INPUT */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2"><Type size={14}/> Subject / Title</label>
                <input
                  type="text"
                  placeholder="What are you studying?"
                  className="w-full bg-[#0F172A] p-3 rounded-xl outline-none text-white border border-transparent focus:border-purple-500 transition"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              {/* PRIORITY SELECT */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Priority Level</label>
                <select
                  className="w-full bg-[#0F172A] p-3 rounded-xl outline-none text-white border border-transparent focus:border-purple-500"
                  value={formData.priority}
                  onChange={handlePriorityChange}
                >
                  <option value="High">High (Deep Work)</option>
                  <option value="Medium">Medium (Routine)</option>
                  <option value="Low">Low (Simple Tasks)</option>
                  <option value="Relax">Relax (Break)</option>
                </select>
              </div>

              <button
                onClick={handleAddNew}
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 rounded-2xl font-bold mt-4 hover:opacity-90 transition shadow-lg shadow-purple-500/20"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}