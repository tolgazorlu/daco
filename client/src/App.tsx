import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard/Dashboard'
import Problems from './pages/Dashboard/Problems'
import Users from './pages/Dashboard/Users'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/problems" element={<Problems />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/question/:slug" element={<Question/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App