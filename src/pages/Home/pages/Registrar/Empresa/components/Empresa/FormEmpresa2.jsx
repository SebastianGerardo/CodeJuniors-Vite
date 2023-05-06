import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputBasic } from "../../../../../../../components/Inputs/InputBasic";

const FormEmpresa2 = ({ handleInputChange, infoForm }) => {
  return (
    <>
      <h2 className="flex gap-1 text-lg">Información adicional</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-4 mt-2">
        <InputBasic
            onChange={handleInputChange}
            label="Sector de la empresa"
            type="text"
            placeholder="Ej: Tecnología"
            name="empresa_sector"
            value={infoForm?.empresa_sector}
            required={true}
        />
        <InputBasic
            onChange={handleInputChange}
            label="Ubicación de la empresa"
            type="text"
            placeholder="Ej: Quito"
            name="empresa_ubicacion"
            value={infoForm?.empresa_ubicacion}
            required={true}
        />
        <div className="col-span-3">
            <label className="w-full">
            <span className="text-start block text-sm font-medium text-gray-400">
                    Descripción de la empresa
                </span>
            <textarea
                value={infoForm?.empresa_descripcion}
                name={"empresa_descripcion"}
                required={true}
                autoComplete="off"
                placeholder={"¡Cuéntanos un poco sobre ti!"}
                onChange={handleInputChange}
                className="resize-none block w-full h-[8rem] rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
            ></textarea>
            </label>
        </div>
        
        
      </div>
    </>
  );
};

export default FormEmpresa2;

