import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { User } from "../contexts/User"

export default function UserRoute() {
    const {
      state: { userInfo },
    } = useContext(User)

    if (userInfo) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }