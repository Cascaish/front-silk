<<<<<<< HEAD
import { toast } from "react-toastify"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import Title from "../../../core/components/title"

const campos = [
  {name: 'nome', label: 'Nome'},
  {name: 'descricao', label: 'Descriçao'},
]

const initialData = {
  nome: '',
  descricao: ''
}

const CadastroCategorias = () => {

  
  const cadastrar = async (data) => {
    await api.post('/categoria', data)

    toast.success('Categoria cadastrada com sucesso!')
  }


  return (
    <div>
      <Title
        title='Cadastrar Categorias'
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
  {name: 'nome', label: 'Nome'},
  {name: 'descricao', label: 'Descriçao'},
]

const initialData = {
  nome: '',
  descricao: ''
}

const CadastroCategorias = () => {

  
  const cadastrar = async (data) => {
    await api.post('/categoria', data)

    toast.success('Categoria cadastrada com sucesso!')
  }


  return (
    <div>
      <Title
        title='Cadastrar Categorias'
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
export default CadastroCategorias