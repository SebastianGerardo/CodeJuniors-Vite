import React from "react";
import Menu from "../../components/Menu/Menu";
import notification from '../../assets/Menu/notification.png'
import user from '../../assets/Menu/user.png'
import developer from '../../assets/Menu/developer.png'
import { Outlet } from "react-router-dom";
import ContextPage from "../../context/ContextPage";

const Developer = () => {
  return (
    <ContextPage>
      <div className="flex">
        <Menu LinksMenu={LinksDeveloper} />
        <Outlet />
      </div>
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
