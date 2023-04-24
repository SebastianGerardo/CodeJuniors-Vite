import { useEffect, useState } from 'react';
import './Modal.css';
import share from '../../../../assets/Developer/share.svg'
import modalidad from '../../../../assets/Developer/modalidad.svg'
import jornada from '../../../../assets/Developer/jornada.svg'
import saladio from '../../../../assets/Developer/salario.svg'
import publicado from '../../../../assets/Developer/publicado.svg'
import circleTopRight from '../../../../assets/Developer/circle-top-right.svg'
import circleBottomRight from '../../../../assets/Developer/circle-bottom-right.svg'
import circleBottomLeft from '../../../../assets/Developer/circle-bottom-left.svg'
import close from '../../../../assets/Developer/close.svg'
import check from '../../../../assets/Developer/check.svg'

const Modal = () => {

    const [showhidden, setShowhidden] = useState('hidden')

    const clickAlert = () => {
        setShowhidden('flex')
        setTimeout(()=>setShowhidden('hidden'),4000)
    }

    useEffect(()=>{
        
    },[])

    return (
        <div className="modal-container">
            <img src={circleTopRight} alt="" className='cicle-TopRight' />
            <img src={circleBottomRight} alt="" className='cicle-BottomRight' />
            <img src={circleBottomLeft} alt="" className='cicle-BottomLeft' />
            <div className={`${showhidden} items-center p-5 bg-green-400 none rounded-lg justify-between alert`}>
                <div className='flex'>
                    <img src={check} alt="" width={14} className='mr-2' />
                    <p>Se postulo a la empresa <b>Zoluxiones</b>, espere la respuesta!</p>
                </div>
                {/* <img src={close} alt="" width={14} className='transicion-escala' onClick={()=>setShowhidden('hidden')} /> */}
            </div>
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img src="https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10214356_bum_v68951268.jpg" alt="" className='mr-4' width={58} />
                    <div className='justify-items-start'>
                        <h2 className='font-bold text-xl'>Desarrollador Backend con Python</h2>
                        <p className='font-light'>Zoluxiones</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={share} alt="" className='w-5 mr-5 transicion-escala' />
                    <button className='btn-postular transicion-escala' onClick={()=>clickAlert()}>Postular</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between mt-4 mb-4'>
                <div className='flex'>
                    <img src={modalidad} alt="" className='mr-2' />
                    <p>Remoto</p>
                </div>
                <div className='flex'>
                    <img src={jornada} alt="" className='mr-2' />
                    <p>Full Time</p>
                </div>
                <div className='flex'>
                    <img src={saladio} alt="" className='mr-2' />
                    <p>$2200</p>
                </div>
                <div className='flex'>
                    <img src={publicado} alt="" className='mr-2' />
                    <p>Publicado hace 12h</p>
                </div>
            </div>
            <div className='mb-4'>
                <p>Somos Zoluxiones, grupo empresarial enfocado en ofrecer servicios que faciliten y optimicen las operaciones de nuestros clientes a través de los servicios de Tecnología de la Información y Outsourcing.</p>
            </div>
            <div className='flex justify-between'>
                <div className='seperador'>
                    <h3 className='font-bold text-base mb-2'>Requisitos</h3>
                    <ul className='list-disc pl-5'>
                        <li>Experiencia trabajando con modelos de Machine Learning.</li>
                        <li>Python avanzado</li>
                        <li>Experiencia e big data</li>
                        <li>Deseable: Experiencia con Gurobi.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-base mb-2'>Funciones</h3>
                    <ul className='list-disc pl-5'>
                        <li>Experiencia trabajando con modelos de Machine Learning.</li>
                        <li>Python avanzado</li>
                        <li>Experiencia e big data</li>
                        <li>Deseable: Experiencia con Gurobi.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal