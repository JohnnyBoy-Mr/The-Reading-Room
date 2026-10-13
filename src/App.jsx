import { useState } from 'react'
import { Navbar } from './components/Header'
import { Hero } from './components/Hero'
import { Fiction } from './components/Fiction'
import { NonFiction } from './components/NonFiction'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Fiction />
      <NonFiction />
    </div>
  )
}

export default App
