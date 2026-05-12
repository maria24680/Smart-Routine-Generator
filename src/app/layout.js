import { RoutineProvider } from "@/context/RoutineContext";
import './globals.css'

export const metadata = {
  title: 'Smart Routine Generator',
  description: 'AI Powered Smart Study Routine App',
}

export default function RootLayout({ children }) {
  return (
  <html>
      <body>
        <RoutineProvider>
          {children}
        </RoutineProvider>
      </body>
    </html>
  )
}