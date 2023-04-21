'use client'
import { useEffect, useState } from 'react';
import './Modal.css';
import share from '../../../public/Developer/share.svg'
import modalidad from '../../../public/Developer/modalidad.svg'
import jornada from '../../../public/Developer/jornada.svg'
import saladio from '../../../public/Developer/salario.svg'
import publicado from '../../../public/Developer/publicado.svg'

const Modal = () => {

    const [imagen, setImagen] = useState({
        imagenWeb: ''
    })

    useEffect(()=>{
        setImagen({
            imagenWeb: share.src,
            modalidad: modalidad.src,
            jornada: jornada.src,
            saladio: saladio.src,
            publicado: publicado.src,
            fotoEmpresa: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10214356_bum_v68951268.jpg'
        })
    },[])

    return (
        <div className="modal-container">
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img src={imagen.fotoEmpresa} alt="" className='mr-4' width={58} />
                    <div className='justify-items-start'>
                        <h2 className='font-bold text-xl'>Desarrollador Backend con Python</h2>
                        <p className='font-light'>Zoluxiones</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={imagen.imagenWeb} alt="" className='w-5 mr-5 transicion-escala' />
                    <button className='btn-postular transicion-escala'>Postular</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between mt-4 mb-4'>
                <div className='flex'>
                    <img src={imagen.modalidad} alt="" className='mr-2' />
                    <p>Remoto</p>
                </div>
                <div className='flex'>
                    <img src={imagen.jornada} alt="" className='mr-2' />
                    <p>Full Time</p>
                </div>
                <div className='flex'>
                    <img src={imagen.saladio} alt="" className='mr-2' />
                    <p>$2200</p>
                </div>
                <div className='flex'>
                    <img src={imagen.publicado} alt="" className='mr-2' />
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