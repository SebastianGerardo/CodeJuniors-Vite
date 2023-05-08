import React, { useState } from 'react'
import { useEffect } from 'react';
import { InputBasic } from '../../../../components/Inputs/InputBasic';
import Modal from '../../../../components/Modal/Modal'
import SocialIcons from '../../../../components/SocialIcons/SocialIcons';
import { CrearRedDesarrollador, TraeRedes } from '../../../../helpers/ApiCommon';

const RedesSociales = (props) => {
    const [experienciaSeleccionada, setExperienciaSeleccionada] = useState({})
    const [redesContent, setRedesContent] = useState([])
    const [formData, setFormData] = useState({
        url: "", 
        id_desarrollador: props.dataUsuario?.id_desarrollador,
        id_redes: null,
    })

    useEffect(() => {
        TraeRedes().then((res) => {
            setRedesContent(res.content)
        })
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const { redes } = SocialIcons();

    const handleChange = (e) => {
        const value = e.target.name != "url" ? Number(e.target.value) : e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value,
        })
    }

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        setExperienciaSeleccionada({})
       setIsOpen(false);
     };

     const enviarData = (e) => {
         e.preventDefault()
         CrearRedDesarrollador(formData).then((res) => {
            console.log(res)
         })
        handleCloseModal()
     }

  return (
    <ul className='flex items-center flex-wrap w-full gap-5'>
        {
            props.dataUsuario.redes && props.dataUsuario?.redes.length > 0 && props.dataUsuario?.redes.map((red,index)=>(
                <li className='flex items-center justify-center' key={index}>
                    <a href={red.desarrollador_redes_url} target="_blank">
                        <img className='red-icon-company' src={redes[red?.id_redes?.redes_redes] || "N/A"} alt=''/>
                    </a>
                </li>
            ))
        }
        <li onClick={handleOpenModal} className='flex items-center justify-center'><div className='add-social-company' >+</div></li>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <div className='p-4 flex flex-col gap-2'>
                <h1 className='text-xl font-semibold'>Red social</h1>
                <form onSubmit={enviarData} action="" className='flex gap-2 flex-col justify-center items-center'>
                <label className="w-full">
                <span className="text-start block text-sm font-medium text-gray-400">
                    Seleccione la red Social
                </span>
                    <select
                        name={"id_tecnologia"}
                        onChange={handleChange}
                        defaultValue={formData?.id_tecnologia}
                        className="block w-full  rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
                    >
                        <option value="1">Seleccione un tipo de red</option>
                        {redesContent.map((tecnologia) => (
                        <option className='capitalize' key={tecnologia.id_redes} value={tecnologia.id_redes}>{tecnologia.redes_redes}</option>
                        ))}
                    </select>
                </label>
                    <InputBasic 
                    label="URL"
                    name="url"
                    placeholder="www.facebook.com"
                    onChange={handleChange}
                    value = {formData?.url}
                    required={true}
                    />
                    <button
                    className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded">
                        Guardar
                    </button>
                </form>
            </div>
        </Modal>
    </ul>
  )
}

export default RedesSociales
