import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardCards from './components/DashboardCards'
import RoutineTable from './components/RoutineTable'
import ProductivityChart from './components/ProductivityChart'
import AISuggestion from './components/AISuggestion'
import Navbar from './components/Navbar'
import CalendarWidget from './components/CalendarWidget'
export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#070B1D] text-white">
      <Sidebar />

      <div className="flex-1 p-5">
        <Topbar />

        <div className="bg-gradient-to-r from-purple-200 to-pink-100 rounded-3xl p-8 text-black mt-5">
          <h1 className="text-4xl font-bold">Good Morning</h1>
          <p className="text-lg mt-2">
            Let’s make today productive and amazing.
          </p>
        </div>
        <Navbar />
        <DashboardCards
  cards={[
    { title: 'Total Tasks', value: 12 },
    { title: 'Completed', value: 8 },
    { title: 'Study Hours', value: '6.5h' },
    { title: 'Productivity', value: '90%' },
  ]}
/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <div className="lg:col-span-2">
            <RoutineTable />
          </div>

          <div className="space-y-5">
            <CalendarWidget />
            <ProductivityChart />
            <AISuggestion />
          </div>
          
        </div>
      </div>
    </div>
  )
}