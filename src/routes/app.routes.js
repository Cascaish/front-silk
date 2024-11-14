<<<<<<< HEAD
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

=======
import { Route, Routes } from "react-router-dom"
import LoginView from "../views/login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
    </Routes>
  )
}

>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
export default AppRoutes