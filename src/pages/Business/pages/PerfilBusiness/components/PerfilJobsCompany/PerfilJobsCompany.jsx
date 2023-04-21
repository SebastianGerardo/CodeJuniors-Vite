import React, { useEffect, useState } from 'react'
import './PerfilJobsCompany.css'
// import ModalEmpleo from '../../Modal/ModalEmpleo';

const PerfilJobsCompany = (props) => {
    const [ job, setJob ] = useState(props.puestosEmpresa);
    const [modal, setModal] = useState(false);

    // const trabajo = () => {
    //     setJob(props.puestosEmpresa)
    //     console.log(props.puestosEmpresa)
    // }

    // useEffect(() => {
    //     trabajo()
    // }, [])

    return (
    <section className='jobs-company'>
        <div className='jobs-section-button'>
          <h1 className='title-section-company'>Vacantes:</h1>
          <button onClick={()=>setModal(!modal)}><h2>+</h2></button>
        </div>
        <section className='jobs-section'>
            <div className='jobs-cards-section'>
            { job?.length && job?.map((element, index) => (
                    <div key={index} className="job control-job">
                       <div className='job_info'>
                           <div className="job_img job-img-box">
                               <img src={props.logoEmpresa} alt="" width={72} height={72} className="img-job" />
                           </div>
                           <div className="job_descr">
                               <p className="p-descr">{props.nombreEmpresa}</p>
                               <h2 className='h2-cargo'> {element.cargo_buscado} | {element.nivel_dev} </h2>
                               <p className="p-descr"><ion-icon name="wifi"></ion-icon> {element.tipo_trabajo} | {element.tiempo_trabajo} | {element.sueldo_trabajo} </p>
                           </div>
                       </div>
                       <div className="job_tec">
                            {
                                element.tecnologias.length > 0 && element.tecnologias.map((image, index)=>(
                                    <img key={index} src={image.icon} alt="" width={20} height={20} />
                                ))
                            }
                       </div>
                    </div>
                ))}
            </div>
        </section>
        {/* MODAL */}
        {/* <div className={`modal-business ${modal && 'activebusiness'}`}>
            <section className={`modal-business-background ${modal && 'activemodalbusiness'}`} onClick={()=>setModal(!modal)}></section>
            <ModalEmpleo />
        </div> */}
    </section>
  )
}

export default PerfilJobsCompany
