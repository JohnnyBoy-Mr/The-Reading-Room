import { useState } from 'react'
import { Navbar } from './components/Header'
import { Hero } from './components/Hero'
import { Fiction } from './components/Fiction'
import { NonFiction } from './components/NonFiction'
import { StaffPicks } from './components/StaffPicks'
import { Events } from './components/Events'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Fiction />
      <NonFiction />
      <StaffPicks />
      <Events />
    </div>
  )
}

export default App
