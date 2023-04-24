import { useState } from "react"
import ModalEdit from '../Modal/ModalEdit'

const InformacionDev = (props) => {

    const [modal, setModal] = useState(false);

    return (
        <div className="info-dev mb card">
            <h2 className="name-dev"><ion-icon name="person"></ion-icon> { props.nombre + " " + props.apellido }</h2>
            <h4 className="job-dev"><ion-icon name="code-outline"></ion-icon> { props.cargo}</h4>
            <p className='p'><ion-icon name="call-outline"></ion-icon> { props.telefono}</p>
            <p className='p'><ion-icon name="mail-outline"></ion-icon> {props.correo}</p>
            <button className="btn-edit" onClick={()=>setModal(!modal)}>Editar Perfil</button>


            <div className={`modal-business ${modal && 'activebusiness'}`}>
                <section className={`modal-business-background ${modal && 'activemodalbusiness'}`} onClick={()=>setModal(!modal)}></section>
                <ModalEdit />
            </div>
        </div>
    )
}

export default InformacionDev;