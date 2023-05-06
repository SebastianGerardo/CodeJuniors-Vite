import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { InputBasic } from '../../../../../../components/Inputs/InputBasic';

const FormDesarrollador = ({handleInputChange, infoForm}) => {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-3 gap-2 mt-2'>
            <InputBasic
                onChange={handleInputChange}
                label="Nombre"
                type="text"
                name="desarrollador_nombre"
                value={infoForm?.desarrollador_nombre}
                required={true}
                placeholder="Ej: Juan Pérez"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Apellido"
                type="text"
                name="desarrollador_apellido"
                value={infoForm?.desarrollador_apellido}
                required={true}
                placeholder="Ej: Ruiz"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Tipo de cargo"
                type="text"
                name="desarrollador_cargo"
                value={infoForm?.desarrollador_cargo}
                required={true}
                placeholder="Ej: Frontend Developer"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Correo electrónico"
                type="email"
                placeholder="Ej: example@gmail.com"
                name="desarrollador_email"
                value={infoForm?.desarrollador_email}
                required={true}
            />
            <InputBasic
                onChange={handleInputChange}
                label="Contraseña"
                type="password"
                name="desarrollador_password"
                value={infoForm?.desarrollador_password}
                required={true}
                placeholder="Ej: ********"
            />
            <InputBasic
                onChange={handleInputChange}
                label="Teléfono"
                type="number"
                name="desarrollador_telefono"
                value={infoForm?.desarrollador_telefono}
                required={true}
                placeholder="Ej: 9999999999999"
            />
            <div className="col-span-3">
            <label className="w-full">
            <span className="text-start block text-sm font-medium text-gray-400">
                    Descripción de la empresa
                </span>
            <textarea
                onChange={handleInputChange}
                label="Descripcion"
                type="text"
                name="desarrollador_descripcion"
                value={infoForm?.desarrollador_descripcion}
                required={true}
                placeholder="Ej: Desarrollador de software con 5 años de experiencia en el rubro."
                className="resize-none block w-full h-[8rem] rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
            ></textarea>
            </label>
        </div>
        </div>
    </div>
  )
}

export default FormDesarrollador
