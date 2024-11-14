import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Router = () => {
  const isAuth = Storage('usuario')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

export default Router