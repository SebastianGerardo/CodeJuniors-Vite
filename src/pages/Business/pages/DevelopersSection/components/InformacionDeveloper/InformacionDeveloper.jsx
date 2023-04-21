import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react"

const InformacionDevCompany = (props) => {

    const [modal, setModal] = useState(false);

    return (
        <div className="info-dev mb card">
            <h2 className="name-dev"><ion-icon name="person"></ion-icon> { props.nombre + " " + props.apellido }</h2>
            <h4 className="job-dev"><ion-icon name="code-outline"></ion-icon> { props.cargo || <Skeleton /> }</h4>
            <p className='p'><ion-icon name="call-outline"></ion-icon> { props.telefono || <Skeleton /> }</p>
            <p className='p'><ion-icon name="mail-outline"></ion-icon> {props.correo || <Skeleton />}</p>
            <button className="btn-edit">Contactar</button>


            <div className={`modal-business ${modal && 'activebusiness'}`}>
                <section className={`modal-business-background ${modal && 'activemodalbusiness'}`} onClick={()=>setModal(!modal)}></section>
            </div>
        </div>
    )
}

export default InformacionDevCompany;