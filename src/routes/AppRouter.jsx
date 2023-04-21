import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Gerardo } from "../components/Notificaciones/NotificationData/Messages"
import NotificationData from "../components/Notificaciones/NotificationData/Notifications"
import Business from "../pages/Business/Business"
import DevelopersSection from "../pages/Business/pages/DevelopersSection/DevelopersSection"
import PerfilBusiness from "../pages/Business/pages/PerfilBusiness/PerfilBusiness"
import Developer from "../pages/Developer/Developer"
import PuestosTrabajos from "../pages/Developer/pages/PuestosTrabajos/PuestosTrabajos"
import Home from "../pages/Home/Home"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h1></h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/developer" element={<Developer />}>
          <Route index element={<h1>Developer</h1>} />
          <Route path="puestos-trabajos" element={<PuestosTrabajos />} />
          <Route path="notifications" element={<NotificationData />}>
            <Route index element={<Gerardo/>}/>    
          </Route>
        </Route>
        <Route path="/business" element={<Business />}>
          <Route index element={<PerfilBusiness />} />
          <Route path="developers" element={<DevelopersSection />} />
          <Route path="notifications" element={<NotificationData />}>
            <Route index element={<Gerardo/>}/>    
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
