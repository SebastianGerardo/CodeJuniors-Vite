import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logout from '../../assets/Menu/logout.png'

const LogoutSession = () => {
    const navigate = useNavigate()

    const logoutSession = () => {
          Swal.fire({
            title: 'Estás a punto de cerrar sesión...',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar sesión!',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem('token')
              navigate(`/`, { replace: true }, { state: { logged: false } })
            }
          })
    }
  return (
      <div onClick={logoutSession} className='links cursor-pointer'>
        <img className='icon-enterprise' style={{marginLeft: "1.2em"}} src={logout} alt=''/> 
        <div className='link-name'>Logout</div>
      </div>
  )
}

export default LogoutSession
