import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { InputBasic } from '../../../../../../../components/Inputs/InputBasic';

const FormEmpresa = ({handleInputChange, infoForm}) => {
  return (
    <div className='w-full'>
        <h2 className="flex gap-1 text-lg w-full">
            Información general de la empresa
        </h2>
        <div className='grid grid-cols-3 gap-2 mt-2'>
            <InputBasic
                onChange={handleInputChange}
                label="Encargado"
                type="text"
                name="empresa_encargado"
                value={infoForm?.empresa_encargado}
                required={true}
                placeholder="Ej: Juan Pérez"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Correo electrónico"
                type="email"
                placeholder="Ej: example@gmail.com"
                name="empresa_email"
                value={infoForm?.empresa_email}
                required={true}
            />
            <InputBasic
                onChange={handleInputChange}
                label="Contraseña"
                type="password"
                name="empresa_password"
                value={infoForm?.empresa_password}
                required={true}
                placeholder="Ej: ********"
            />
            <InputBasic
                onChange={handleInputChange}
                label="Nombre de la empresa"
                type="text"
                name="empresa_nombre"
                value={infoForm?.empresa_nombre}
                required={true}
                placeholder="Ej: Google"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Teléfono del encargado"
                type="text"
                name="empresa_telefono"
                value={infoForm?.empresa_telefono}
                required={true}
                placeholder="Ej: 924102366"
                />
            <InputBasic
                onChange={handleInputChange}
                label="Ruc"
                type="number"
                name="empresa_ruc"
                value={infoForm?.empresa_ruc}
                required={true}
                placeholder="Ej: 9999999999999"
            />
            <div className='col-span-3'>
                <InputBasic
                    onChange={handleInputChange}
                    label="Razón social"
                    type="text"
                    name="empresa_razon_social"
                    value={infoForm?.empresa_razon_social}
                    required={true}
                    placeholder="Ej: Empresa S.A."
                />
            </div>
        </div>
    </div>
  )
}

export default FormEmpresa

/*empresa_nombre: "",
    empresa_encargado: "",
    empresa_ruc: "",
    empresa_email: "",
    empresa_password: "",
    empresa_razon_social: "",*/

/*<label className="w-full">
            <span className="pl-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            Tipo de usuario
            </span>
            <select
            defaultValue="desarrollador"
            name="tipo"
            onChange={handleInputChange}
            className="block w-full h-14 rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
            >
            <option value="desarrollador">Desarrollador</option>
            <option value="empresa">Empresa</option>
            </select>
        </label> */