import './ModalEdit.css'

const ModalEdit = () => {
    return(
        <div className="modal-editar">
            <div className="modal-input">
                <h2>Editar Perfil</h2>
                <div className='col-2'>
                    <input type="text" className="input-edit" placeholder="Editar nombre" />
                    <input type="text" className="input-edit" placeholder="Editar apellido" />
                    <input type="text" className="input-edit" placeholder="Editar cargo" />
                    <input type="text" className="input-edit" placeholder="Editar telefono" />
                    <input type="text" className="input-edit" placeholder="Editar correo" />
                    <input type="text" className="input-edit" placeholder="Editar biografia" />
                    <input type="text" className="input-edit" placeholder="Nombre a mostrar en Github" />
                    <input type="text" className="input-edit" placeholder="Link de Perfil de Github" />
                    <input type="text" className="input-edit" placeholder="Nombre a mostrar Portafolio" />
                    <input type="text" className="input-edit" placeholder="Link de Portafolio" />
                    <input type="text" className="input-edit" placeholder="Nombre a mostrar Linkedin" />
                    <input type="text" className="input-edit" placeholder="Link de Perfil de Linkedin" />
                </div>
                <div>
                    <button className='btn btn-canelar mr-20px'>Cancelar</button>
                    <button className='btn btn-actualizar'>Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit;