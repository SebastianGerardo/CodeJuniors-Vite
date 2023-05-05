import React, { useEffect, useState } from 'react'
import Modal from '../../../../../../components/Modal/Modal';
import ModalJobs from '../../modals/ModalJobs';
import './PerfilJobsCompany.css'

const PerfilJobsCompany = (props) => {
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
    <section className='jobs-company'>
        <div className='jobs-section-button'>
          <h1 className='title-section-company text-xl font-bold'>Vacantes:</h1>
          <button onClick={handleOpenModal} ><h2>+</h2></button>
        </div>
        <section className='jobs-section'>
            <div className='jobs-cards-section flex flex-col gap-3'>
            { props?.dataUsuario?.trabajos && props?.dataUsuario?.trabajos.length > 0 && props?.dataUsuario?.trabajos.map((element, index) => (
                    <div onClick={() => {handleOpenModal(), setDataSeleccionada(element)}} key={index} className="job control-job">
                       <div className='job_info flex items-center'>
                           <div className="job_img job-img-box">
                               <img src={props?.dataUsuario?.empresa_foto} alt="" width={72} height={72} className="img-job" />
                           </div>
                           <div className="job_descr">
                               <p className="p-descr">{props?.dataUsuario?.empresa_nombre}</p>
                               <h2 className='h2-cargo'> {element.trabajos_cargo} | {element.trabajos_modalidad} </h2>
                               <p className="p-descr"><ion-icon name="wifi"></ion-icon> {element.trabajos_jornada} | {element.trabajos_salario} | {element.trabajos_publicado} </p>
                           </div>
                       </div>
                       <div className="job_tec">
                            {
                                element?.tbl_trabajos_tecnologia?.length > 0 && element?.tbl_trabajos_tecnologia?.map((image, index)=>(
                                    <img key={index} src={image.tbl_tecnologia.tecnologia_imagen} alt="" width={20} height={20} />
                                ))
                            }
                       </div>
                    </div>
                ))}
            </div>
        </section>
        {/* MODAL */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalJobs handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataSeleccionada={dataSeleccionada} dataUsuario={props.props?.dataUsuario} />
        </Modal>
    </section>
  )
}

export default PerfilJobsCompany
