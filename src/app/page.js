import Sidebar from './components/Sidebar'

import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#070B1D] text-white">
      <Sidebar />

      
        <Navbar />
        

        
      
    </div>
  )
}