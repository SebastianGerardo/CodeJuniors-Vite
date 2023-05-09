import React from 'react'
import './DevelopersSection.css'
import './SearchDevelopers.css'
import { useState, useEffect } from 'react'
import Perfildeveloper from '../../DevPerfil/PerfilDeveloper/PerfilDeveloper';
// import { DataComDev } from '../../../../services/Company/DataComDevs'
// import PerfildeveloperCompany from '../../Developers/Perfil/PerfilDeveloperCompany'

export default function DevelopersSection(props) {
  const [ data, setData ] = useState([{}]);
  const [ modal, setModal ] = useState(false);
  const [ userEmail, setUserEmail ]= useState("")
  const [ tecnology, setTecnology ] = useState([])

  // const DataDevCom = async () => {
  //   const response = await DataComDev("developers");
  //   setData(response)
  //   console.log(response)
  //   // setTecnology(response.map(tecnology => tecnology.tecnologia))
  // }

  // const filterData = (e) => {
  //   const valueInput = e.target.value

  //   // const datainfo = {
  //   //     nombre: data.map(name => name.nombre),
  //   //     tecnologia: data.map(tecnology => tecnology.tecnologia),
  //   // }

  //   if (valueInput.length === 0) {
  //     DataDevCom();
  //   }

  //   if (valueInput.length > 3) {
  //     const filtrador = data.filter((name) => name.nombre.toUpperCase().includes(valueInput.toUpperCase()))
  //     setData(filtrador)
  //     // const hla = tecnology.map( e => e.map( v => v.name))
  //     // const obj = Object.fromEntries(hla)
  //     // console.log(obj)
  //   }
  // }

  // useEffect(() => {
  //   DataDevCom();
  // }, [])


  return (
    <section className={`company-developers ${modal && 'activecompany-developers'}`}>
      <section className='company-dev-search'>
        <div className='company-dev-search_box'>
            <input type='text'/>
            <button>Buscar</button>
        </div>
      </section>
      <section className='company-dev-users'>
        <section className='company-dev-users_box'>
          {data.length > 0 && data.map((event) => (
            <div className='company-dev-users__cards' onClick={() => {
              setModal(!modal);
              setUserEmail(event.correo);
            }}>

              <div className='users-cards-header'>
                <div className='users-cards-header__banner'>
                  <img src='https://timelinecovers.pro/facebook-cover/download/web-developer-coding-on-screen-hex2rgb-facebook-cover.jpg' alt=''/>  
                </div>
                <div className='users-cards-header__perfil'>
                  <img src={event.foto_perfil} alt=''/>  
                </div>
              </div> 

              <div className='users-cards-main'>
                <h1>{event.nombre} {event.apellido}</h1>
                <h2 className='users-card-charge'>{event.cargo}</h2>
                  {/* <div className='tecnologies-user'>{event.tecnologia.length > 0 && event.tecnologia.map((element) => (
                    <img src={element.icon} alt='icon-tecnologies' className='icon-tc'/>
                  ))}</div>   */}
              </div>

              <div className='users-cards-footer'>
                    
              </div>

            </div>
          ))}
        </section>
      </section>

      <section className={`company-dev-users-modal ${modal && 'activeCompany-dev-users-modal'}`} >
        <div className={`background-modal ${modal && 'activeBackground-modal'}`} onClick={() => setModal(!modal)}></div>
        <section className={`dev-users_modal ${modal && 'activeDev-users_modal'}`}>
          {/* <PerfildeveloperCompany email={userEmail}/> */}
          <Perfildeveloper />
        </section>
      </section>
    </section>
  )
}
