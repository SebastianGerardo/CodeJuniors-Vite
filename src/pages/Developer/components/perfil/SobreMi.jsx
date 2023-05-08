import { useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalSobreMi from "../modals/ModalSobreMi";
import SocialIcons from "../../../../components/SocialIcons/SocialIcons";
import RedesSociales from "./RedesSociales";
import { useContext } from "react";
import { UserContext } from "../../../../context/ContextPage";

const SobreMi = (props) => {

    const [experienciaSeleccionada, setExperienciaSeleccionada] = useState({})

    const [isOpen, setIsOpen] = useState(false);
    const { redes } = SocialIcons();

    const { handleRecargarTabla } = useContext(UserContext)

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        setExperienciaSeleccionada({})
       setIsOpen(false);
     };

    return(
        <div className="about-me card">
            <div className="flex justify-between w-full">
                <h2 className="subtitle"><ion-icon name="person"></ion-icon> Sobre mi</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={editIcon} alt="Editar" className=""/>
                </span>
            </div>
            <p className="p">{props.dataUsuario?.desarrollador_descripcion}</p>
            {/* <RedesSociales dataUsuario={props.dataUsuario} /> */}
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalSobreMi handleCloseModal={handleCloseModal} handleRecargarTabla={handleRecargarTabla} dataUsuario={props.dataUsuario} experienciaSeleccionada={experienciaSeleccionada} />
            </Modal>
        </div>
    )
}

export default SobreMi;