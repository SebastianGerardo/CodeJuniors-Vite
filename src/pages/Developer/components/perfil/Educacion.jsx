import { useEffect, useState } from "react";
import addIcon from '../../../../assets/Icons/add.svg'
import Modal from "../../../../components/Modal/Modal";
import ModalEducacion from "../modals/ModalEducacion";
import certificateIcon from '../../../../assets/Developer/certificate.png'

const Educacion = (props) => {
    const [educacionSeleccionada, setEducacionSeleccionada] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        setEducacionSeleccionada({});
       setIsOpen(false);
     };

    return (
        <div className="education card mt mb">
            <div className="w-full flex justify-between items-center mb-2">
                <h2 className="subtitle m-0"><ion-icon name="school"></ion-icon> Educacion</h2>
                <span onClick={handleOpenModal} className="cursor-pointer">
                    <img src={addIcon} alt="Editar" className=""/>
                </span>
            </div>
            <div className="my-education">
                {
                    props.dataUsuario?.educacion?.length > 0 && props.dataUsuario?.educacion?.map((e, index)=>(
                        <div onClick={() => {handleOpenModal(), setEducacionSeleccionada(e)}} key={index} className="cursor-pointer grid grid-cols-[4.2rem_auto_4.2rem] gap-2 bg-[#BDCDD6] p-[10px] rounded-lg mb-4">
                            <img src={e.educacion_foto} alt="" width={66} height={66} />
                            <div className="flex flex-col gap-1 text-start justify-center">
                                <p className="text-lg font-medium">{e.educacion_institucion}</p>
                                <p className="italic text-gray-500 font-ligth">{e.educacion_carrera}</p>
                            </div>
                            <img src={certificateIcon} alt="" width={70}/>
                        </div>
                    ))
                }
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalEducacion handleRecargarTabla={props.handleRecargarTabla} handleCloseModal={handleCloseModal} educacionSeleccionada={educacionSeleccionada} dataUsuario={props.dataUsuario} />
            </Modal>
        </div>
    )
}

export default Educacion;