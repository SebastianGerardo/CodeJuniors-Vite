import React, { useEffect, useState } from 'react'
import './PerfilSocialCompany.css'
import fb_logo from '../../../../../../assets/Perfil/facebook.png'
import twitter_logo from '../../../../../../assets/Perfil/twitter.png'
import ig_logo from '../../../../../../assets/Perfil/instagram.png'
// import ModalRedes from '../../Modal/ModalRedes'

export default function PerfilSocialCompany(props) {

  const [ red, setRed ] = useState([]);
  const [modal, setModal] = useState(false);

  const redes = {
    "Instagram": ig_logo,
    "Twitter": twitter_logo,
    "Facebook": fb_logo,
  }

  useEffect(() => {
    setRed(props.redesEmpresa)
  }, [props.redesEmpresa])

  return (
    <div className='social-company'>
        <section className='company-info-description'>
            <div className='info-description_sector'>
              <h2>Sector:</h2>
              <p>{props.sectorEmpresa}</p>
            </div>

            <div className='info-description_departamento'>
              <h2>Ubicación:</h2>
              <p>{props.departamentoEmpresa}</p>
            </div>
        </section>
        <nav className='social-nav-company'>
            <ul className='social-company_list'>
                { red?.length > 0 && red?.map((e, index) => (
                  <li key={index}><a href={e.link} target="_blank"><img className='red-icon-company' src={redes[e.red] ?? "N/A"} alt=''/></a></li>
                ))}
                <li><div className='add-social-company' onClick={()=>setModal(!modal)}>+</div></li>
            </ul>
        </nav>
        <div className={`modal-business ${modal && 'activebusiness'}`}>
            <section className={`modal-business-background ${modal && 'activemodalbusiness'}`} onClick={()=>setModal(!modal)}></section>
            {/* <ModalRedes /> */}
        </div>
    </div>
  )
}
