import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import developer from '../../assets/Menu/developer.png'
import notification from '../../assets/Menu/notification.png'
import user from '../../assets/Menu/user.png'
import Menu from '../../components/Menu/Menu'
import ContextPage from '../../context/ContextPage'
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'
import { verificarDesarrollador } from "../../helpers/ApiUsuario";

const Business = () => {
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    verificarDesarrollador(token).then((res) => {
      setLoading(false)
    })
  }, []);

  return (
    <ContextPage>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <RaceBy/>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0, transition: { duration: 0.5 } }}
           transition={{ duration: 0.3 }}
           className="flex">
            <Menu LinksMenu={LinksBusiness} />
            <div className='w-full'>
              <Outlet />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </ContextPage>
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
  // {
  //     id: 2,
  //     nombre: 'Desarrolladores',
  //     link: '/business/developers',
  //     icon: developer
  // },
  {
      id: 3,
      nombre: 'Notificaciones',
      link: '/business/notifications',
      icon: notification
  },
]
