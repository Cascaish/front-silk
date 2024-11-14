import { Navigate, Route, Routes } from "react-router-dom"
import Header from "../core/components/header"
import ListarUsuarios from "../views/usuarios/listar"
import CadastrarUsuario from "../views/usuarios/cadastro"
import Sidebar from "../core/components/sidebar"
import ListarCategorias from "../views/categorias/listar"
import CadastroCategorias from "../views/categorias/cadastro"
import ListarProdutos from "../views/produtos/listar"
import CadastroProdutos from "../views/produtos/cadastro"
import SiteRoutes from "./site.routes"

const AuthRoutes = () => {
  return (
    <main>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{
          width: '15%'
        }}>
          <Sidebar />
        </div>
        <div className="container-listar">
          <Routes>
            {/* <Route path="/" element={<Navigate to='/usuarios/lista' replace/>}/> */}
            <Route path="/usuarios/lista" element={<ListarUsuarios />} />
            <Route path="/usuarios/cadastro" element={<CadastrarUsuario />} />
            <Route path="/categorias/lista" element={<ListarCategorias />} />
            <Route path="/categorias/cadastro" element={<CadastroCategorias />} />
            <Route path="/produtos/lista" element={<ListarProdutos />} />
            <Route path="/produtos/cadastro" element={<CadastroProdutos />} />
          </Routes>
          <SiteRoutes/>
        </div>
      </div>
    </main>
  )
}

export default AuthRoutes