import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalSobreMi from "../modals/ModalSobreMi";

const SobreMi = (props) => {
    const [ sob, setSob ] = useState([]);

    console.log(props.dataUsuario);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
       setIsOpen(false);
     };



    const fetchSob = () => {
        setSob(props.sob);
    }

    useEffect(()=>{
        fetchSob();
    },[props.sob,props.bio])

    return(
        <div className="about-me card">
            <div className="flex justify-between w-full">
                <h2 className="subtitle"><ion-icon name="person"></ion-icon> Sobre mi</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={editIcon} alt="Editar" className=""/>
                </span>
            </div>
            <p className="p">{props.dataUsuario?.desarrollador_descripcion}</p>
            {
                sob.length > 0 && sob.map((s,index)=>(
                    <a key={index} href={s.link} target="_blank" className="link"><ion-icon name={s.web}></ion-icon> @{s.name} </a>
                ))
            }

            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalSobreMi />
            </Modal>
        </div>
    )
}

export default SobreMi;