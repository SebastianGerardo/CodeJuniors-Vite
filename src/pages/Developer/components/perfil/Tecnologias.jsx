import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalTecnologias from "../modals/ModalTecnologias";

const Tecnologias = (props) => {
    const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState({});



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
        setTecnologiaSeleccionada({})
       setIsOpen(false);
     };



    useEffect(()=>{
        fetchTec()
        console.log(props.dataUsuario.tecnologias)
        console.log(props.dataUsuario)
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
                        props?.dataUsuario?.tecnologias && props?.dataUsuario?.tecnologias?.length > 0 && props?.dataUsuario?.tecnologias?.map((t, index)=>(
                            <div key={index}>
                                <img src={t.id_tecnologia.tecnologia_imagen} alt={t.id_tecnologia.tecnologia_nombre} className="img-skill w-10" />
                            </div>
                        ))
                    }
                </div>
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalTecnologias handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataUsuario={props.dataUsuario} tecnologiaSeleccionada={tecnologiaSeleccionada} />
                </Modal>
            </div>
        </>
    )
}
export default Tecnologias;