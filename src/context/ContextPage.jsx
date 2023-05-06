import React, { createContext, useEffect, useState  } from 'react'
import { verificarDesarrollador } from '../helpers/ApiUsuario'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const ContextPage = ({children}) => {
  const token = localStorage.getItem("token")
  const [usuarioLogin, setUsuarioLogin] = useState({})
  const [recargarTabla, setRecargarTabla] = useState(false)
  const navigate = useNavigate()

  const handleRecargarTabla = () => {
    setRecargarTabla(!recargarTabla)
  }

  useEffect(() => {
    verificarDesarrollador(token).then((res) => {
      if (res.status == 200) {
        setUsuarioLogin(res.content)
        return res.content.id_desarrollador ? navigate("/developer", {state: {logged: true}}) : navigate("/business", {state: {logged: true}})
      } else {
        navigate("/", {state: {logged: false}})
      }
    })
  }, [recargarTabla])

  return (
    <UserContext.Provider value={{usuarioLogin, handleRecargarTabla}}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextPage
