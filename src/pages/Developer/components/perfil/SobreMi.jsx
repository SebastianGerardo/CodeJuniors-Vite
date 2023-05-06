import { useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalSobreMi from "../modals/ModalSobreMi";
import SocialIcons from "../../../../components/SocialIcons/SocialIcons";

const SobreMi = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const { redes } = SocialIcons();

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
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
            <ul className='flex items-center flex-wrap w-full gap-5'>
                {
                    props.dataUsuario.redes && props.dataUsuario?.redes.length > 0 && props.dataUsuario?.redes.map((red,index)=>(
                        <li className='flex items-center justify-center' key={index}>
                            <a href={red.desarrollador_redes_url} target="_blank">
                                <img className='red-icon-company' src={redes[red?.id_redes?.redes_redes] || "N/A"} alt=''/>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalSobreMi />
            </Modal>
        </div>
    )
}

export default SobreMi;