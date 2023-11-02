import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { User } from "../contexts/User"

export default function AdminRoute() {
    const {
      state: { userInfo },
    } = useContext(User)

    if (userInfo && userInfo.isAdmin) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }