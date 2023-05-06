import  './Notifications.css'
import gerardoImg from '../../../assets/ChatSeccion/gerardo-img.jpg'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Ping } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from 'react';
import { UserContext } from '../../../context/ContextPage';
import { verificarDesarrollador } from '../../../helpers/ApiUsuario';
import { MensajeDesarrollador, MensajeEmpresa } from '../../../helpers/ApiMensajes';


const NotificationData = () => {
    const { dv } = useParams() 

    const activeMessage = {
        background: "#2B63FD",
        color: "#fff",
    }

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { usuarioLogin } = useContext(UserContext)

  const token = localStorage.getItem("token")
  const [formNuevo, setFormNuevo] = useState([])
  const [usuario, setUsuario] = useState({})
  const [formDesarrollador, setFormDesarrollador] = useState({
    mensaje: "",
    id_desarrollador: usuarioLogin?.id_desarrollador,
    id_sala: 2,
  })

  const [formEmpresa, setFormEmpresa] = useState({
    mensaje: "",
    id_empresa: usuarioLogin?.id_empresa,
    id_sala: 2,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      verificarDesarrollador(token).then((res) => {
        setUsuario(res.content)
      })
    }, 1000);
    return () => clearInterval(interval);
  })

  
  useEffect(() => {
    if(Object.values(usuario).length > 0)
    setFormNuevo([
      ...usuario?.chat[0]?.mensaje_des,
      ...usuario?.chat[0]?.mensaje_emp
    ])
  }, [usuario])
  

  formNuevo.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  const handleEnviar = (e) => {
    e.preventDefault()
    if (usuario?.id_desarrollador) {
      MensajeDesarrollador(formDesarrollador).then((res) => {
        console.log(res)
        setFormDesarrollador({
          ...formDesarrollador,
          mensaje: ""
        })
       })
    } else {
      MensajeEmpresa(formEmpresa).then((res) => {
        setFormEmpresa({
          ...formEmpresa,
          mensaje: ""
        })
      })
    }
  }

  const handleInputChange = (e) => {
    if(usuario?.id_desarrollador){
      setFormDesarrollador({
        ...formDesarrollador,
        [e.target.name]: e.target.value
      })
    } else {
      setFormEmpresa({
        ...formEmpresa,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Ping />
        </div>
      ) : (
        <AnimatePresence>
            <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3 }}
            className='notificationBox notification-business'
            >
                <section className='contacts-notifications'>
                    <ul>
                        <li><NavLink className="links-notification" to={`/developers/${dv}/notifications`} style={({ isActive }) => isActive ? activeMessage: undefined} end><div className='profile-jorge'><img className='img-profile-jorge' src={gerardoImg} alt=''/></div><div className='username-profile'>Gerardo</div></NavLink></li>
                    </ul>
                </section>

                <section className='outlet-notification'>
                    {/* <Outlet/> */}
                    <form onSubmit={handleEnviar} className='chat-section w-full h-full' >
                      <section className='flex flex-col w-full justify-between'>
                        <div>
                          {formNuevo && formNuevo?.map((item, index) => (
                            <div key={index}>
                              {item?.id_desarrollador && 
                              <div className={`${usuario?.id_desarrollador ? "text-right" : "text-left"}`}>
                                {item?.mensaje}
                              </div>
                              }
                              {item?.id_empresa && 
                              <div className={`${usuario?.id_desarrollador ? "text-left" : "text-right"}`}>
                                {item?.mensaje}
                              </div>
                              }
                            </div>
                          ))}
                        </div>
                        <div className='w-full flex gap-2 items-center justify-center'>
                          <input value={usuario?.id_desarrollador ? formDesarrollador?.mensaje : formEmpresa.mensaje} name='mensaje' onChange={handleInputChange} type="text" className='block w-full rounded-md sm:text-sm  px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]' placeholder='Aa'  />
                          <button className={`bg-[#FA632BD9] hover:bg-[#FA632B] transition-all duration-150 text-white font-medium py-2 px-4 rounded h-12`}>Enviar</button>
                        </div>
                      </section>
                    </form>
                </section>
            </motion.section>
        </AnimatePresence>
    )}
    </>
  )
}

export default NotificationData
