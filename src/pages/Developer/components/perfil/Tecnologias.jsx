import { useEffect, useState } from "react";
import editIcon from '../../../../assets/Icons/edit.svg'
import Modal from "../../../../components/Modal/Modal";
import { TraeTecnologias } from "../../../../helpers/ApiCommon";
import ModalTecnologias from "../modals/ModalTecnologias";

const Tecnologias = (props) => {
    const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState({});
    const [tecnologias, setTecnologias] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log("click")
     };
    
     const handleCloseModal = () => {
        setTecnologiaSeleccionada({})
       setIsOpen(false);
     };

     useEffect(() => {
        TraeTecnologias().then((res) => {
            setTecnologias(res.content)
        })
     }, [])

    return (
        <>
            <div className="skills card">
                <div className="w-full flex justify-between">
                    <h2 className="subtitle"><ion-icon name="build"></ion-icon> Tecnologias Dominadas</h2>
                    <span onClick={handleOpenModal} className="cursor-pointer">
                        <img src={editIcon} alt="Editar" className=""/>
                    </span>
                </div>
                <div className="ml-2 flex gap-4 flex-wrap">
                    {
                        props?.dataUsuario?.tecnologias && props?.dataUsuario?.tecnologias?.length > 0 && props?.dataUsuario?.tecnologias?.map((t, index)=>(
                            <div className="cursor-pointer w-10 h-10 " onClick={() => {setTecnologiaSeleccionada(t), handleOpenModal()}} key={index}>
                                <img src={t.id_tecnologia.tecnologia_imagen} alt={t.id_tecnologia.tecnologia_nombre} className="w-full h-full object-contain" />
                            </div>
                        ))
                    }
                </div>
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalTecnologias tecnologias={tecnologias} handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} dataUsuario={props.dataUsuario} tecnologiaSeleccionada={tecnologiaSeleccionada} />
                </Modal>
            </div>
        </>
    )
}
export default Tecnologias;