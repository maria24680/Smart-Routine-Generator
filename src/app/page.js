import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

import Navbar from './components/Navbar'

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
       
          
        
      </div>
    </div>
  )
}