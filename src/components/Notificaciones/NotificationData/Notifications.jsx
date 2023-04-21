import  './Notifications.css'
import gerardoImg from '../../../assets/ChatSeccion/gerardo-img.jpg'
import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const NotificationData = () => {
    const { dv } = useParams() 

    const activeMessage = {
        background: "#2B63FD",
        color: "#fff",
    }

  return (
    <section className='notificationBox notification-business'>
        <section className='contacts-notifications'>
            <ul>
                <li><NavLink className="links-notification" to={`/developers/${dv}/notifications`} style={({ isActive }) => isActive ? activeMessage: undefined} end><div className='profile-jorge'><img className='img-profile-jorge' src={gerardoImg} alt=''/></div><div className='username-profile'>Gerardo</div></NavLink></li>
            </ul>
        </section>

        <section className='outlet-notification'>
            <Outlet/>
        </section>
    </section>
  )
}

export default NotificationData
