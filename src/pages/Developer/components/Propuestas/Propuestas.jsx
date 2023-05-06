import { useEffect, useState } from "react";
import './Propuestas.css';
import ModalPropuestas from "../modals/ModalEdit/ModalPropuestas";
import Modal from "../../../../components/Modal/Modal";
//import ModalRedes from '../../CompanyPage/Modal/ModalRedes';

const Propuesta = (props) => {

    const [pro, setPro] = useState([]);
    const [modal, setModal] = useState(false);

    const fetchEdu = () => {
        setPro(props.business);
    }

    useEffect(()=>{
        fetchEdu();
    }, [props.business])

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsOpen(false);
      };

      console.log(props.dataSeleccionada)

    return(
        <div className="jobs">
            {
                pro.length && pro.map((b, index)=>(
                    <div onClick={() => {props.setDataSeleccionada(b), handleOpenModal()}} className="job" key={index}>
                        <div className='job_info'>
                            <div className="job_img">
                                <img src={b?.tbl_empresa?.empresa_foto} alt="" width={72} height={72} className="img-job" />
                            </div>
                            <div className="job_descr">
                                <p className="p-descr">{b.tbl_empresa?.empresa_nombre}</p>
                                <h2 className='h2-cargo'>{b.trabajos_cargo} | {"Junior"}</h2>
                                <p className="p-descr"><ion-icon name="wifi"></ion-icon> {b.trabajos_modalidad} | {b.trabajos_jornada} | {b.trabajos_salario}</p>
                            </div>
                        </div>
                        <div className="job_tec">
                            {
                                b.tbl_trabajos_tecnologia.length && b.tbl_trabajos_tecnologia.map((t, index)=>(
                                    <img src={t.tbl_tecnologia.tecnologia_imagen} alt="" width={20} height={20} key={index} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalPropuestas dataSeleccionada={props.dataSeleccionada} pro={pro} />
                </Modal>
        </div>
    )
}

export default Propuesta;