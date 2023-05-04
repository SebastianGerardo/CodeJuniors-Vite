import { useState } from "react"
import Modal from "../../../../components/Modal/Modal";
import ModalEdit from '../modals/ModalEdit/ModalEdit'

const InformacionDev = ({dataUsuario}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log("click")
     };
    
     const handleCloseModal = () => {
       setIsOpen(false);
     };


    return (
        <div className="info-dev mb card">
            <h2 className="name-dev"><ion-icon name="person"></ion-icon> { dataUsuario?.desarrollador_nombre?.split(" ", 1) + " " + dataUsuario?.desarrollador_apellido?.split(" ", 1) }</h2>
            <h4 className="job-dev"><ion-icon name="code-outline"></ion-icon> { dataUsuario?.desarrollador_cargo}</h4>
            <p className='p'><ion-icon name="call-outline"></ion-icon> { dataUsuario?.desarrollador_telefono}</p>
            <p className='p'><ion-icon name="mail-outline"></ion-icon> {dataUsuario?.desarrollador_email}</p>
            <button className="btn-edit" onClick={handleOpenModal}>Editar Perfil</button>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalEdit dataUsuario={dataUsuario} handleCloseModal={handleCloseModal} />
            </Modal>
        </div>
    )
}

export default InformacionDev;