import { useContext, useState } from 'react';
import { InputBasic } from '../../../../../../components/Inputs/InputBasic';
import './ModalEdit.css'
import { updateDesarrollador } from '../../../../../../helpers/ApiUsuario';
import { UserContext } from '../../../../../../context/ContextPage';

const ModalEdit = ({handleCloseModal, dataUsuario}) => {

    const [formData, setFormData] = useState({
        desarrollador_nombre: dataUsuario?.desarrollador_nombre || '',
        desarrollador_apellido: dataUsuario?.desarrollador_apellido || '',
        desarrollador_cargo: dataUsuario?.desarrollador_cargo || '',
        desarrollador_telefono: dataUsuario?.desarrollador_telefono || '',
        desarrollador_email: dataUsuario?.desarrollador_email || '',
        desarrollador_foto: dataUsuario?.desarrollador_foto || '',
    })

    const token = localStorage.getItem('token')

    const {handleRecargarTabla} = useContext(UserContext)

    const handleEdit = (e) => {
        e.preventDefault();
        handleCloseModal()
        updateDesarrollador(dataUsuario?.id_desarrollador, formData,token).then((res) => {
            console.log(res)
            handleRecargarTabla()
        })
    }
    const handleInputChange = (e) => {
        const value = e.target.name == 'desarrollador_telefono' ? Number(e.target.value) : e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    return(
        <div className="modal-editar">
            <form className="flex flex-col gap-2">
                <h2 className='text-2xl font-semibold'>Editar Perfil</h2>
                <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                    <InputBasic 
                     label="Nombres"
                     type = "text"
                     name = "desarrollador_nombre"
                     placeholder = "Editar nombres"
                     onChange={handleInputChange}
                     value={formData?.desarrollador_nombre}
                    />
                    <InputBasic 
                     label="Apellidos"
                     type = "text"
                     name = "desarrollador_apellido"
                     placeholder = "Editar apellidos"
                     onChange={handleInputChange}
                     value={formData?.desarrollador_apellido}
                    />
                    <InputBasic 
                     label="Cargo"
                     type = "text"
                     name = "desarrollador_cargo"
                     placeholder = "Editar cargo"
                     onChange={handleInputChange}
                     value={formData?.desarrollador_cargo}
                    />
                    <InputBasic 
                     label="Telefono"
                     type = "text"
                     name = "desarrollador_telefono"
                     placeholder = "Editar telefono"
                     onChange={handleInputChange}
                     value={formData?.desarrollador_telefono}
                    />
                    <div className='col-span-2'>
                        <InputBasic 
                        label="Email"
                        type = "text"
                        name = "desarrollador_email"
                        placeholder = "Editar telefono"
                        onChange={handleInputChange}
                        value={formData?.desarrollador_email}
                        />
                    </div>
                    <div className='col-span-2'>
                        <InputBasic 
                        label="Foto de perfil"
                        type = "text"
                        name = "desarrollador_foto"
                        placeholder = "Editar foto de perfil"
                        onChange={handleInputChange}
                        value={formData?.desarrollador_foto}
                        />
                    </div>
                </div>
                <div>
                    <button className='btn btn-canelar mr-20px' onClick={(e)=>{e.preventDefault(),handleCloseModal()}}>Cancelar</button>
                    <button className='btn btn-actualizar' onClick={handleEdit}>Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default ModalEdit;