import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'
import NotFount from './pages/NotFount'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFount/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/question/:slug" element={<Question/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App