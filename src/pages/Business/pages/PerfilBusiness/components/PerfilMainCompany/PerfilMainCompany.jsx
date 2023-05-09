import React, { useState } from 'react'
import './PerfilMainCompany.css'
import editIcon from '../../../../../../assets/Icons/edit.svg'
import ModalMain from '../../modals/ModalMain';
import Modal from '../../../../../../components/Modal/Modal';


export default function PerfilMainCompany(props) {

  const [dataSeleccionada, setDataSeleccionada] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        setDataSeleccionada({});
       setIsOpen(false);
     };


  return (
    <div className='main-company'>
      <section className='main-company_description'>
        <div className='top-main_description'>
          <h1 className='title-section-company text-xl font-bold'>Descripción:</h1>
          <div onClick={handleOpenModal} className='cursor-pointer'>
            <img src={editIcon} alt="" />  
          </div>
        </div>
        <p>{props.dataUsuario?.empresa_descripcion}</p>
      </section>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalMain handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataSeleccionada={dataSeleccionada} dataUsuario={props.dataUsuario} />
      </Modal>
    </div>
  )
}
