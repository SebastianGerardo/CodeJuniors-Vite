import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalExperiencia from "../modals/ModalExperiencia";

const Experiencia = (props) => {

    const [ exp, setExp ] = useState([]);

    const [experienciaSeleccionada, setExperienciaSeleccionada] = useState({});

    const fetchExp = () => {
        setExp(props.experiencia);
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log("click")
     };
    
     const handleCloseModal = () => {
        setExperienciaSeleccionada({});
        setIsOpen(false);
     };



    useEffect( ()=>{
        fetchExp()
        console.log("props.dataUsuario", props.dataUsuario)
    }, [props.dataUsuario] )

    return (
        <div className="my-experience card mb">
            <div className="w-full flex justify-between">
                <h2 className="subtitle"><ion-icon name="bag"></ion-icon> Mi Experiencia</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={editIcon} alt="Editar" className=""/>
                </span>
            </div>
            {
                props.dataUsuario?.experiencia?.length > 0 && props.dataUsuario?.experiencia?.map((e, index)=>(
                    <div onClick={() => {handleOpenModal(), setExperienciaSeleccionada(e)}} key={index} className="cursor-pointer">
                        <div key={index} className="business">
                            <div className="business-info">
                                <div className="business-name">
                                    <h3 key={e.id_experiencia}><ion-icon name="business"></ion-icon> {e.experiencia_empresa}</h3>
                                    <p className="p"><ion-icon name="calendar"></ion-icon> {e.experiencia_finicio}</p>
                                </div>
                                <p className="p">experiencia_cargo</p>
                            </div>
                            <img src={e.experiencia_logo} alt="" className="photo-business" height={57} width={57} />
                        </div>
                    </div>
                ))
            }
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalExperiencia handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataUsuario={props.dataUsuario} experienciaSeleccionada={experienciaSeleccionada} />
            </Modal>
        </div>
    )
}

export default Experiencia;