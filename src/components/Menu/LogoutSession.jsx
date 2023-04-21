import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import logout from '../../assets/Menu/logout.png'

const LogoutSession = () => {
    const navigate = useNavigate()

    const logoutSession = () => {
        // const swalWithBootstrapButtons = Swal.mixin({
        //     buttonsStyling: true
        //   })
          
        //   swalWithBootstrapButtons.fire({
        //     title: 'Estás a punto de cerrar sesión...',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Cerrar sesión',
        //     cancelButtonText: 'Cancelar',
        //     reverseButtons: true
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //         navigate(`/`)
        //     } 
        //   })
    }
  return (
      <div onClick={logoutSession} className='links'>
        <img className='icon-enterprise' style={{marginLeft: "1.2em"}} src={logout} alt=''/> 
        <div className='link-name'>Logout</div>
      </div>
  )
}

export default LogoutSession
