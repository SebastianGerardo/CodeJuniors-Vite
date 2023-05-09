import React, { useState } from 'react'
import { useContext } from 'react';
import Modal from '../../../../../../components/Modal/Modal';
import { UserContext } from '../../../../../../context/ContextPage';
import ModalBanner from '../../modals/ModalBanner'
import './PerfilBannerCompany.css'
// import bannerCompanyDefault from '../../../../assets/Perfil/banner-company-default.jpg'

export default function PerfilBannerCompany(props) {
  const [dataSeleccionada, setDataSeleccionada] = useState({});


    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        // setDataSeleccionada({});
       setIsOpen(false);
     };
  return (
      <section className='perfil-company'>
        <div className='company__banner'>
          <h1 className="logo logo-banner-company text-[#ffb0ff] text-[28px] font-bold">Dev<span className="logo-extend logo-extend_banner ">Juniors</span></h1>
          <div className='company_info'>
            <div onClick={handleOpenModal} className='company__info-img min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]'>
              <img src={props.dataUsuario?.empresa_foto} alt=''/>
            </div>
            <h1 className='company__info-name font-bold w-max'>{props.dataUsuario?.empresa_nombre}</h1>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalBanner handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataSeleccionada={dataSeleccionada} dataUsuario={props.dataUsuario} />
        </Modal>
      </section>
  )
}
