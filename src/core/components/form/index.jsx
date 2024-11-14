<<<<<<< HEAD
import { useState } from "react"
import './index.scss'
import Textfield from "../input"
import { toast } from "react-toastify"

const Form = ({ fields = [], onSubmit, initialData }) => {
  const [formValue, setFormValue] = useState(initialData)

  const onChange = (e, item) => {
    if (item.type == 'file') {
      setFormValue({
        ...formValue,
        [item.name]: e.target.files[0],
      })
    } 
    
    else {
      setFormValue({
        ...formValue,
        [item.name]: e.target.value
      })
    }

  }

  const submit = async () => {
    try {
      await onSubmit(formValue)
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.erro || 'Não foi possivel completar a operação')
    }
  }

  return (
    <div className="form-container-main">
      <div className="form-content">
        {fields?.map(item => (
          <Textfield
            value={formValue[item.name]}
            type={item.type}
            label={item.label}
            name={item.name}
            onChange={e => onChange(e, item)}
            items={item.items}
            mask={item.mask}
          />
        ))}
      </div>
      <button onClick={submit}>Cadastrar</button>
    </div>
  )
}

=======
import { useState } from "react"
import './index.scss'
import Textfield from "../input"
import { toast } from "react-toastify"

const Form = ({ fields = [], onSubmit, initialData }) => {
  const [formValue, setFormValue] = useState(initialData)

  const onChange = (e, item) => {
    if (item.type == 'file') {
      setFormValue({
        ...formValue,
        [item.name]: e.target.files[0],
      })
    } 
    
    else {
      setFormValue({
        ...formValue,
        [item.name]: e.target.value
      })
    }

  }

  console.log(formValue )

  const submit = async () => {
    try {
      await onSubmit(formValue)
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.erro || 'Não foi possivel completar a operação')
    }
  }

  return (
    <div className="form-container-main">
      <div className="form-content">
        {fields?.map(item => (
          <Textfield
            value={formValue[item.name]}
            type={item.type}
            label={item.label}
            name={item.name}
            onChange={e => onChange(e, item)}
            items={item.items}
            mask={item.mask}
          />
        ))}
      </div>
      <button onClick={submit}>Cadastrar</button>
    </div>
  )
}

>>>>>>> fa7c29557efb1bc4884a0d8dc2c05fed89e4dab8
export default Form