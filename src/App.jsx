import { useState } from 'react'
import { Navbar } from './components/Header'
import { Hero } from './components/Hero'
import { Fiction } from './components/Fiction'
import { NonFiction } from './components/NonFiction'
import { StaffPicks } from './components/StaffPicks'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Fiction />
        <NonFiction />
        <StaffPicks />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
