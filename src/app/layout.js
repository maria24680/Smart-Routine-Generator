import './globals.css'

export const metadata = {
  title: 'Smart Routine Generator',
  description: 'AI Powered Smart Study Routine App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#070B1D] text-white">
        {children}
      </body>
    </html>
  )
}