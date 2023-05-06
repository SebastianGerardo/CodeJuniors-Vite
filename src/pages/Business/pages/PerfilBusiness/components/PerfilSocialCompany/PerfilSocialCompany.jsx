import React, { useEffect, useState } from 'react'
import './PerfilSocialCompany.css'
import editIcon from '../../../../../../assets/Icons/edit.svg'
import ModalSocial from '../../modals/ModalSocial'
import Modal from '../../../../../../components/Modal/Modal'
import SocialIcons from '../../../../../../components/SocialIcons/SocialIcons'

export default function PerfilSocialCompany(props) {

  const [dataSeleccionada, setDataSeleccionada] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        // setDataSeleccionada({});
       setIsOpen(false);
     };
    const {redes} = SocialIcons()
  

  console.log(props.dataUsuario)

  return (
    <div className='social-company justify-evenly'>
        <section className='company-info-description'>
            <div className='flex justify-between items-center'>
              <div className='info-description_sector'>
                <span className='text-xl font-bold'>Sector:</span>
                <p>{props.dataUsuario?.empresa_sector}</p>
              </div>
              <div onClick={handleOpenModal} className='flex items-start justify-start cursor-pointer'>
                <img src={editIcon} alt="" />
              </div>
            </div>

            <div className='info-description_departamento'>
              <h2 className='text-xl font-bold'>Ubicación:</h2>
              <p>{props.dataUsuario?.empresa_ubicacion}</p>
            </div>
        </section>
        <nav className='social-nav-company'>
            <ul className=' grid grid-cols-4 justify-center'>
                {props.dataUsuario?.redes && props.dataUsuario?.redes?.length > 0 && props.dataUsuario?.redes?.map((red, index) => (
                  <li className='flex items-center justify-center' key={index}>
                    <a href={red.empresa_red_url} target="_blank">
                      <img className='red-icon-company' src={redes[red.tbl_redes?.redes_redes] || "N/A"} alt=''/>
                    </a>
                  </li>
                ))}
                <li onClick={handleOpenModal} className='flex items-center justify-center'><div className='add-social-company' >+</div></li>
            </ul>
        </nav>
        {/* <ModalRedes /> */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalSocial handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataSeleccionada={dataSeleccionada} dataUsuario={props.dataUsuario} />
        </Modal>
    </div>
  )
}
