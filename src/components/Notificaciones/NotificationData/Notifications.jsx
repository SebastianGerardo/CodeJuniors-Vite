import  './Notifications.css'
import gerardoImg from '../../../assets/ChatSeccion/gerardo-img.jpg'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Ping } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";


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
                    <Outlet/>
                </section>
            </motion.section>
        </AnimatePresence>
    )}
    </>
  )
}

export default NotificationData
