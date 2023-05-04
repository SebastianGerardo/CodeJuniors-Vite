import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalTecnologias from "../modals/ModalTecnologias";

const Tecnologias = (props) => {
    const [ array, setArray ] = useState([]);

    const fetchTec = () => {
        setArray(props.tecnologia)
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log("click")
     };
    
     const handleCloseModal = () => {
       setIsOpen(false);
     };



    useEffect(()=>{
        fetchTec()
    }, [props.tecnologia] )

    return (
        <>
            <div className="skills card">
                <div className="w-full flex justify-between">
                    <h2 className="subtitle"><ion-icon name="build"></ion-icon> Tecnologias Dominadas</h2>
                    <span onClick={handleOpenModal} className="cursor-pointer">
                        <img src={editIcon} alt="Editar" className=""/>
                    </span>
                </div>
                <div className="skills-icon">
                    {
                        array.map((t)=>(
                            <img key={t.icon} src={t.icon} alt={t.name} className="img-skill" />    
                        ))
                    }
                </div>
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalTecnologias />
                </Modal>
            </div>
        </>
    )
}
export default Tecnologias;