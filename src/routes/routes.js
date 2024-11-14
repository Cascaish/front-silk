<<<<<<< HEAD
import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Router = () => {
  const isAuth = Storage('usuario')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

=======
import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Router = () => {
  const isAuth = Storage('usuario')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
export default Router