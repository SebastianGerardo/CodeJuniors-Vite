import React from 'react'
import { Outlet } from 'react-router-dom'
import developer from '../../assets/Menu/developer.png'
import notification from '../../assets/Menu/notification.png'
import user from '../../assets/Menu/user.png'
import Menu from '../../components/Menu/Menu'

const Business = () => {
  return (
    <div className='flex'>
        <Menu LinksMenu={LinksBusiness} />
        <Outlet />
    </div>
  )
}

export default Business

const LinksBusiness = [
  {
      id: 1,
      nombre: 'Perfil',
      link: '/business',
      icon: user
  },
  {
      id: 2,
      nombre: 'Desarrolladores',
      link: '/business/developers',
      icon: developer
  },
  {
      id: 3,
      nombre: 'Notificaciones',
      link: '/business/notifications',
      icon: notification
  },
]
