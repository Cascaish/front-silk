<<<<<<< HEAD
import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import { useMemo } from "react"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"

const ListarCategorias = () => {
  const { data } = useSWR('categoria', (key) => api.get(key).then(res => res.data))

  const navigate = useNavigate()

  const categorias = useMemo(() => {
    return data?.map(item => ({
      ...item,
      descricao: `${item.descricao.slice(0, 25)}...`
    })) ?? []
  }, [data])

  console.log(categorias)

  const colunas = [
    { accessor: 'nome', label: 'NOME' },
    { accessor: 'descricao', label: 'Descrição' }
  ]

  return (
    <div>
      <Table
        data={categorias}
        columns={colunas}
        options={{
          onClick: () => navigate('/categorias/cadastro')
        }}
      />
    </div>
  )
}

=======
import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import { useMemo } from "react"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"

const ListarCategorias = () => {
  const { data } = useSWR('categoria', (key) => api.get(key).then(res => res.data))

  const navigate = useNavigate()

  const categorias = useMemo(() => {
    return data?.map(item => ({
      ...item,
      descricao: `${item.descricao.slice(0, 25)}...`
    })) ?? []
  }, [data])

  console.log(categorias)

  const colunas = [
    { accessor: 'nome', label: 'NOME' },
    { accessor: 'descricao', label: 'Descrição' }
  ]

  return (
    <div>
      <Table
        data={categorias}
        columns={colunas}
        options={{
          onClick: () => navigate('/categorias/cadastro')
        }}
      />
    </div>
  )
}

>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
export default ListarCategorias