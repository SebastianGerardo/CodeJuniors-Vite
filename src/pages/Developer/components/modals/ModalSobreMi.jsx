import React, { useState } from "react";
import { Toast } from '../../../../components/Alertas/Toast'
import Swal from 'sweetalert2'
import { InputBasic } from "../../../../components/Inputs/InputBasic";

const ModalSobreMi = ({dataUsuario,sobremiSeleccionada,handleCloseModal,handleRecargarTabla}) => {

	const [formData, setFormData] = useState({
        url: sobremiSeleccionada?.redes.desarrollador_redes_url || "",
        id_desarrollador_redes: sobremiSeleccionada?.redes.id_desarrollador_redes || "",
        redes: sobremiSeleccionada?.redes.id_redes.redes_redes || "",
        id_desarrollador: dataUsuario?.id_desarrollador,
    })

	const enviarData = (e) => {
        e.preventDefault()
        if(validacionSeleccionado) {
            actualizarExperiencia(experienciaSeleccionada?.id_experiencia ,formData).then((res) => {
            console.log(res)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Experiencia actualizada correctamente!'
              })
              handleRecargarTabla()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizada la Experiencia'
              })
            }
          })
        } else {

            crearExperiencia(formData).then((res) => {
                console.log(experienciaSeleccionada?.desarrollador_foto)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Experiencia creada correctamente!'
              })
              handleRecargarTabla()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al agregar un Experiencia'
              })
            }
          })
        }
      }

	const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

	return (
		<div className="w-[52rem] h-[30rem] p-8">
			<label className="w-full">
				<span className="text-start block text-sm font-medium text-gray-400">
					Sobre mi
				</span>
				<textarea
					placeholder="Escribe algo sobre ti"
					name="sobreMi"
					className="block w-full h-[8rem] resize-none rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
				></textarea>
			</label>

			<label className="w-full">
				<span className="text-start block text-sm font-medium text-gray-400">
					Seleccione la red Social
				</span>
				<select
					value={"value"}
					type={"type"}
					name={"name"}
					autoComplete="off"
					placeholder={"placeholder"}
					onChange={handleChange}
					className="block w-full  rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
				>
					<option value="1">facebook</option>
					<option value="2">linkedin</option>
					<option value="3">instagram</option>
					<option value="5">whatsapp</option>
					<option value="6">github</option>
					<option value="7">youtube</option>
					<option value="8">web</option>
				</select>
			</label>

			<InputBasic
				label='Link de la red social'
				placeholder='Link de la red social'
				name='url'
				value={formData?.url}
				onChange={handleChange}
            />

			<button
				onClick={enviarData}
				className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded">
				Guardar
			</button>
		</div>
	);
};

export default ModalSobreMi;
