import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import notification from '../../assets/Menu/notification.png'
import user from '../../assets/Menu/user.png'
import developer from '../../assets/Menu/developer.png'
import { Outlet } from "react-router-dom";
import ContextPage from "../../context/ContextPage";
import { RaceBy } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'

const Developer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
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
            <Menu LinksMenu={LinksDeveloper} />
            <span className="w-full">
              <Outlet />
            </span>
          </motion.div>
        </AnimatePresence>
      )}
    </ContextPage>
  );
};

export default Developer;

const LinksDeveloper = [
  {
    id: 1,
    nombre: "Perfil",
    link: "/developer",
    icon: user,
  },
  {
    id: 2,
    nombre: "Buscar Trabajos",
    link: "/developer/puestos-trabajos",
    icon: developer,
  },
  {
    id: 3,
    nombre: "Notificaciones",
    link: "/developer/notifications",
    icon: notification,
  },
]
