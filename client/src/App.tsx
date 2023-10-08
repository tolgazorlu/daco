import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/question" element={<Question/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App