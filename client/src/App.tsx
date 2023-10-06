import Hero from "./components/Hero"
import Navbar from "./layouts/Navbar"

const App = () => {
  return (
    <div className="px-0 lg:px-20 h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App