<<<<<<< HEAD
import { toast } from "react-toastify"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import Title from "../../../core/components/title"

const campos = [
  { name: 'nome', label: 'Nome' },
  { name: 'email', label: 'Email' },
  { name: 'senha', label: 'Senha' },
]

const initialData = {
  nome: '',
  email: '',
  senha: ''
}

const CadastrarUsuario = () => {

  const cadastrar = async (data) => {
    await api.post('/inserirUsuario', data)

    toast.success('Usuário cadastrado com sucesso!')
  }

  return (
    <div className="container-listar">
      <Title
        title='Cadastrar Usuários'
        subtitle='Cadastre seus usuários e funcionarios'
      />     
      <Form
        fields={campos}
        initialData={initialData}
        onSubmit={cadastrar}
      />
    </div>
  )
}

=======
import { toast } from "react-toastify"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import Title from "../../../core/components/title"

const campos = [
  { name: 'nome', label: 'Nome' },
  { name: 'email', label: 'Email' },
  { name: 'senha', label: 'Senha' },
]

const initialData = {
  nome: '',
  email: '',
  senha: ''
}

const CadastrarUsuario = () => {

  const cadastrar = async (data) => {
    await api.post('/inserirUsuario', data)

    toast.success('Usuário cadastrado com sucesso!')
  }

  return (
    <div className="container-listar">
      <Title
        title='Cadastrar Usuários'
        subtitle='Cadastre seus usuários e funcionarios'
      />     
      <Form
        fields={campos}
        initialData={initialData}
        onSubmit={cadastrar}
      />
    </div>
  )
}

>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
export default CadastrarUsuario