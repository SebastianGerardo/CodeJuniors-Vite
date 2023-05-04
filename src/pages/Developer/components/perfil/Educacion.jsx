import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalEducacion from "../modals/ModalEducacion";

const Educacion = (props) => {
    const [edu, setEdu] = useState([]);

    const fetchEdu = () => {
        setEdu(props.educacion);
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
        fetchEdu();
    }, [props.educacion])

    return (
        <div className="education card mt mb">
            <div className="w-full flex justify-between">
                <h2 className="subtitle"><ion-icon name="school"></ion-icon> Educacion</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={editIcon} alt="Editar" className=""/>
                </span>
            </div>
            <div className="my-education">
                {
                    edu.length > 0 && edu.map((e, index)=>(
                        <div key={index} className="institution">
                            <img src={e.logo_ins} alt="" width={66} height={66} />
                            <div className="institution-text">
                                <p>{e.nombre_ins}</p>
                                <p>{e.carrera}</p>
                            </div>
                            <img src={e.certificado} alt="" width={70}/>
                        </div>
                    ))
                }
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalEducacion />
            </Modal>
        </div>
    )
}

export default Educacion;