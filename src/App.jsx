import { useState } from 'react'
import { Navbar } from './components/Header'
import { Hero } from './components/Hero'
import { Fiction } from './components/Fiction'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Fiction />
    </div>
  )
}

export default App
