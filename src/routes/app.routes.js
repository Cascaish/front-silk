import { Route, Routes } from "react-router-dom"
import LoginView from "../views/login"
import SiteRoutes from "./site.routes"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginView />} />
      </Routes>
      <SiteRoutes/>
    </>
  )
}

export default AppRoutes