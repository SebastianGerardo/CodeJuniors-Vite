import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Gerardo } from "../components/Notificaciones/NotificationData/Messages"
import NotificationData from "../components/Notificaciones/NotificationData/Notifications"
import Business from "../pages/Business/Business"
import DevelopersSection from "../pages/Business/pages/DevelopersSection/DevelopersSection"
import PerfilBusiness from "../pages/Business/pages/PerfilBusiness/PerfilBusiness"
import Developer from "../pages/Developer/Developer"
import PuestosTrabajos from "../pages/Developer/pages/BuscarTrabajos/BuscarTrabajos"
import Home from "../pages/Home/Home"
import Perfildeveloper from "../pages/Developer/pages/PerfilDeveloper/PerfilDeveloper"
import Login from "../pages/Home/pages/Login/Login"
import MainPage from "../pages/Home/pages/MainPage/MainPage"
import { PrivateRouter } from "./PrivateRouter"
import ContextPage from "../context/ContextPage"
import RegistrarEmpresa from "../pages/Home/pages/Registrar/Empresa/RegistrarEmpresa"
import RegistrarDesarrollador from "../pages/Home/pages/Registrar/Desarrollador/RegistrarDesarrollador"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="/developer" element={<PrivateRouter><Developer /></PrivateRouter>}>
          <Route index element={<Perfildeveloper /> } />
          <Route path="puestos-trabajos" element={<PuestosTrabajos />} />
          <Route path="notifications" element={<NotificationData />}>
            <Route index element={<Gerardo/>}/>    
          </Route>
        </Route>
        <Route path="/business" element={<PrivateRouter><Business /></PrivateRouter>}>
          <Route index element={<PerfilBusiness />} />
          <Route path="developers" element={<DevelopersSection />} />
          <Route path="notifications" element={<NotificationData />}>
            <Route index element={<Gerardo/>}/>    
          </Route>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/registrar_empresa" element={<RegistrarEmpresa/>} />
        <Route path="/registrar_desarrollador" element={<RegistrarDesarrollador/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
