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


    return(
        <div className="jobs">
            {
                pro.length && pro.map((b, index)=>(
                    <div className="job" onClick={handleOpenModal} key={index}>
                        <div className='job_info'>
                            <div className="job_img">
                                <img src={b.logo_empresa} alt="" width={72} height={72} className="img-job" />
                            </div>
                            <div className="job_descr">
                                <p className="p-descr">{b.nombre_empresa} </p>
                                <h2 className='h2-cargo'>{b.puestos_trabajos[0].cargo_buscado} | {b.puestos_trabajos[0].nivel_dev}</h2>
                                <p className="p-descr"><ion-icon name="wifi"></ion-icon> {b.puestos_trabajos[0].tipo_trabajo} | {b.puestos_trabajos[0].tiempo_trabajo} | {b.puestos_trabajos[0].sueldo_trabajo}</p>
                            </div>
                        </div>
                        <div className="job_tec">
                            {
                                b.puestos_trabajos[0].tecnologias.length && b.puestos_trabajos[0].tecnologias.map((t, index)=>(
                                    <img src={t.icon} alt="" width={20} height={20} key={index} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalPropuestas />
                </Modal>
        </div>
    )
}

export default Propuesta;