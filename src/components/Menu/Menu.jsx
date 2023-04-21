import { useState } from 'react'
import './Menu.css'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import LogoutSession from './LogoutSession'

const Menu = ({LinksMenu}) => {
    const [ menu, setMenu ] = useState(false)

    // const { dv } = useParams() //TODO: ESTO SE TIENE QUE IMPLEMENTAR LUEGO

    const activeStyle = {
        borderLeft: "3px solid #000",
        filter: "invert(67%) sepia(94%) saturate(1626%) hue-rotate(243deg) brightness(101%) contrast(104%)",
    }

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <section className='rola'>
            <section className={`menu ${menu && 'menu__dc'}`}>
                <section className={`menu-fixed ${menu && 'menu__dc-fixed'}`}>
                <div className={`bars__menu ${menu && 'activeBars__menu'}`} onClick={handleMenu}>
                  <span className={`line1__bars-menu ${menu && 'activeLine1__bars-menu'}`}></span>
                  <span className={`line2__bars-menu ${menu && 'activeLine2__bars-menu'}`}></span>
                  <span className={`line3__bars-menu ${menu && 'activeLine3__bars-menu'}`}></span>
                </div>
                <nav className={`nav ${menu && 'active_menu'}`}>
                        <ul className='list'>
                            {
                                LinksMenu.length > 0 && LinksMenu.map((link) => (
                                    <li key={link.id}>
                                        <NavLink 
                                        onClick={() => menu === false ? "" : setMenu(!menu)} 
                                        className='links' 
                                        style={({ isActive }) => isActive ? activeStyle : undefined} 
                                        to={`${link.link}`} 
                                        end>
                                            <img className='icon-enterprise' src={link.icon} alt=''/> 
                                            <div className='link-name'>{link.nombre}</div>
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <li><LogoutSession/></li>
                        </ul>
                </nav>
                </section>
            </section>
        </section>
    )    
}

export default Menu

