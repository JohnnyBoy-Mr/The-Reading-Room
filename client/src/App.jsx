import { useState } from 'react'
import { Navbar } from './components/Header'
import { Hero } from './components/Hero'
import { BookGrid } from './components/BookGrid'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="top"
      className="min-h-screen w-full min-w-0 bg-bg">
      <Navbar />
      <main className="w-full min-w-0">
        <Hero />
        <BookGrid />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
