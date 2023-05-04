import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalExperiencia from "../modals/ModalExperiencia";

const Experiencia = (props) => {

    const [ exp, setExp ] = useState([]);

    const fetchExp = () => {
        setExp(props.experiencia);
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log("click")
     };
    
     const handleCloseModal = () => {
       setIsOpen(false);
     };



    useEffect( ()=>{
        fetchExp()
    }, [props.experiencia] )

    return (
        <div className="my-experience card mb">
            <div className="w-full flex justify-between">
                <h2 className="subtitle"><ion-icon name="bag"></ion-icon> Mi Experiencia</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={editIcon} alt="Editar" className=""/>
                </span>
            </div>
            {
                exp.length > 0 && exp.map((e, index)=>(
                    <div key={index} className="business">
                        <div className="business-info">
                            <div className="business-name">
                                <h3 key={e.name_biss}><ion-icon name="business"></ion-icon> {e.name_biss}</h3>
                                <p className="p"><ion-icon name="calendar"></ion-icon> {e.rang_fecha}</p>
                            </div>
                            <p className="p">{e.cargo}</p>
                        </div>
                        <img src={e.logo_biss} alt="" className="photo-business" height={57} width={57} />
                    </div>
                ))
            }
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalExperiencia />
            </Modal>
        </div>
    )
}

export default Experiencia;