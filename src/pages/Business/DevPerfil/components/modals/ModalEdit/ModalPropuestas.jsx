import { useContext, useEffect, useState } from 'react';
import './Modal.css';
import './ModalEdit.css';
import share from '../../../../../assets/Developer/share.svg'
import modalidad from '../../../../../assets/Developer/modalidad.svg'
import jornada from '../../../../../assets/Developer/jornada.svg'
import saladio from '../../../../../assets/Developer/salario.svg'
import publicado from '../../../../../assets/Developer/publicado.svg'
import circleTopRight from '../../../../../assets/Developer/circle-top-right.svg'
import circleBottomRight from '../../../../../assets/Developer/circle-bottom-right.svg'
import circleBottomLeft from '../../../../../assets/Developer/circle-bottom-left.svg'
import close from '../../../../../assets/Developer/close.svg'
import check from '../../../../../assets/Developer/check.svg'
import { CrearSala } from '../../../../../helpers/ApiMensajes';
import { UserContext } from '../../../../../context/ContextPage';
import { Toast } from '../../../../../components/Alertas/Toast';

const ModalPropuestas = (props) => {

    const [showhidden, setShowhidden] = useState('hidden')

    const [formData, setFormData] = useState({
        id_empresa: "",
        id_desarrollador: "",
    })

    const {usuarioLogin} = useContext(UserContext)

    useEffect(() => {
        setFormData({
            ...formData,
            id_empresa: props.dataSeleccionada?.tbl_empresa?.id_empresa,
            id_desarrollador: usuarioLogin.id_desarrollador
        })
    }, [])

    const clickAlert = () => {
        CrearSala(formData).then((res) => {
            if(res.status == true) {
                setShowhidden('flex')
                setTimeout(()=>setShowhidden('hidden'),4000)
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'Hubo un error al postular al empleo'
                })
            }
        })
    }

    return (
        <div className="modal-container  sm:min-w-[800px]">
            <img src={circleTopRight} alt="" className='cicle-TopRight' />
            <img src={circleBottomRight} alt="" className='cicle-BottomRight' />
            <img src={circleBottomLeft} alt="" className='cicle-BottomLeft' />
            <div className={`${showhidden} items-center p-5 bg-green-400 none rounded-lg justify-between alert`}>
                <div className='flex'>
                    <img src={check} alt="" width={14} className='mr-2' />
                    <p>Usted ha postulado para la empresa <b>{props.dataSeleccionada?.tbl_empresa?.empresa_nombre}</b>, espere la respuesta!</p>
                </div>
                {/* <img src={close} alt="" width={14} className='transicion-escala' onClick={()=>setShowhidden('hidden')} /> */}
            </div>
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img src={props.dataSeleccionada?.tbl_empresa?.empresa_foto} alt="" className='mr-4' width={58} />
                    <div className='justify-items-start'>
                        <h2 className='font-bold text-xl'>{props.dataSeleccionada?.trabajos_cargo}</h2>
                        <p className='font-light'>{props.dataSeleccionada?.tbl_empresa?.empresa_nombre}</p>
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
                    <p>{props.dataSeleccionada?.trabajos_modalidad}</p>
                </div>
                <div className='flex'>
                    <img src={jornada} alt="" className='mr-2' />
                    <p>{props.dataSeleccionada?.trabajos_jornada}</p>
                </div>
                <div className='flex'>
                    <img src={saladio} alt="" className='mr-2' />
                    <p>${props.dataSeleccionada?.trabajos_salario}</p>
                </div>
                <div className='flex'>
                    <img src={publicado} alt="" className='mr-2' />
                    <p>Publicado hace 1m</p>
                </div>
            </div>
            <div className='mb-4'>
                <p>{props.dataSeleccionada?.tbl_empresa.empresa_descripcion}</p>
            </div>
            <div className=''>
                    <h3 className='font-bold text-base mb-2'>Tecnologias:</h3>
                    <ul className='pl-5 flex gap-5 list-none items-center flex-wrap'>
                    {
                        props.dataSeleccionada.tbl_trabajos_tecnologia && props.dataSeleccionada.tbl_trabajos_tecnologia.length > 0 && props.dataSeleccionada.tbl_trabajos_tecnologia.map((t, index)=>(
                            <li className='flex justify-center items-center flex-col'>
                                <div className='flex justify-center items-center w-8 h-8'>
                                    <img src={t.tbl_tecnologia.tecnologia_imagen} className="w-full h-full object-contain m-0" alt="" width={20} height={20} key={index} />
                                </div>
                                <p className='text-gray-400/60 italic'>{t.tbl_tecnologia.tecnologia_nombre}</p>
                            </li>
                        ))
                    }
                    </ul>
            </div>
        </div>
    )
}

export default ModalPropuestas