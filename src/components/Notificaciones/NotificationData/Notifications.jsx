import  './Notifications.css'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Ping } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from 'react';
import { UserContext } from '../../../context/ContextPage';
import { verificarDesarrollador } from '../../../helpers/ApiUsuario';
import { MensajeDesarrollador, MensajeEmpresa } from '../../../helpers/ApiMensajes';
import SalaUsuarios from './SalaUsuarios';


const NotificationData = () => {
  const { usuarioLogin } = useContext(UserContext)
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token")
  const [formNuevo, setFormNuevo] = useState([])
  const [usuario, setUsuario] = useState({})
  const [dataSeleccionada, setDataSeleccionada] = useState({})
  const [formDesarrollador, setFormDesarrollador] = useState({
    mensaje: "",
    id_desarrollador: usuarioLogin?.id_desarrollador,
    id_sala: dataSeleccionada?.id_sala,
  })

  const [formEmpresa, setFormEmpresa] = useState({
    mensaje: "",
    id_empresa: usuarioLogin?.id_empresa,
    id_sala: dataSeleccionada?.id_sala,
  })

  formNuevo.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setFormDesarrollador({
      ...formDesarrollador,
      id_sala: dataSeleccionada?.id_sala
    })
    setFormEmpresa({
      ...formEmpresa,
      id_sala: dataSeleccionada?.id_sala
    })
  }, [dataSeleccionada])

  useEffect(() => {
    const interval = setInterval(() => {
      verificarDesarrollador(token).then((res) => {
        setUsuario(res.content)
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const recargarData = usuario?.chat?.find((item) => item.id_sala == dataSeleccionada?.id_sala)

  useEffect(() => {
    if(Object.values(dataSeleccionada).length > 0) {
      setDataSeleccionada(recargarData)
        setFormNuevo([
          ...dataSeleccionada?.mensaje_des,
          ...dataSeleccionada?.mensaje_emp
        ])
    }
  }, [usuario])

  const handleEnviar = (e) => {
    e.preventDefault()
    if (usuario?.id_desarrollador) {
      MensajeDesarrollador(formDesarrollador).then((res) => {
        console.log(res)
      })
      setFormDesarrollador({
        ...formDesarrollador,
        mensaje: ""
      })
    } else {
      MensajeEmpresa(formEmpresa).then((res) => {
        console.log(res)
      })
      setFormEmpresa({
        ...formEmpresa,
        mensaje: ""
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

  const scrollableRef = useRef(null);

  useLayoutEffect(() => {
    const { current: scrollable } = scrollableRef;
    if (scrollable) {
      scrollable.scrollTop = 99999;
    }
  }, [usuario, formEmpresa]);

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
            className='notificationBox notification-business h-screen'
            >
                <section className='contacts-notifications'>
                    <SalaUsuarios dataSeleccionada={dataSeleccionada} setDataSeleccionada={setDataSeleccionada} usuario={usuario} />
                </section>

                <section className='outlet-notification'>
                    {/* <Outlet/> */}
                    <form onSubmit={handleEnviar} className='chat-section w-full h-full' >
                      <section className='flex flex-col w-full justify-between'>
                        <div ref={scrollableRef} className='overflow-y-scroll scroll-smooth h-max scrollable pb-4'>
                          {formNuevo && formNuevo?.map((item, index) => (
                            <div key={index}>
                              {item?.id_desarrollador && 
                              <div className={`flex flex-col justify-center  ${usuario?.id_desarrollador ? "items-end" : "items-start"}`}>
                                <div className={`${usuario?.id_desarrollador ? "bg-blue-500/30 rounded-br-none" : "bg-gray-400/30 rounded-bl-none"} w-max px-4 py-2 m-1 rounded-xl  text-black`}>
                                  {item?.mensaje}
                                </div>
                              </div>
                              }
                              {item?.id_empresa && 
                              <div className={`flex flex-col justify-center  ${usuario?.id_desarrollador ? "items-start" : "items-end"}`}>
                                <div className={`${usuario?.id_desarrollador ? "bg-gray-400/30 rounded-bl-none" : "bg-blue-500/30 rounded-br-none"} w-max px-4 py-2 m-1 rounded-xl  text-black`}>
                                  {item?.mensaje}
                                </div>
                              </div>
                              }
                            </div>
                          ))}
                        </div>
                        <div className='w-full flex gap-2 items-center justify-center'>
                          <input autoComplete='off' value={usuario?.id_desarrollador ? formDesarrollador?.mensaje : formEmpresa.mensaje} name='mensaje' onChange={handleInputChange} type="text" className='block w-full rounded-md sm:text-sm  px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]' placeholder='Aa'  />
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
