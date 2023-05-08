import React, { useState } from "react";
import { Toast } from '../../../../components/Alertas/Toast'
import Swal from 'sweetalert2'
import { InputBasic } from "../../../../components/Inputs/InputBasic";
import { updateDesarrollador } from "../../../../helpers/ApiUsuario";

const ModalSobreMi = ({dataUsuario,sobremiSeleccionada,handleCloseModal,handleRecargarTabla}) => {

	const [formData, setFormData] = useState({
        desarrollador_descripcion: dataUsuario?.desarrollador_descripcion || '',
    })

	const token = localStorage.getItem('token')

	const enviarData = (e) => {
        e.preventDefault()
          updateDesarrollador(dataUsuario?.id_desarrollador ,formData, token).then((res) => {
              console.log(res)
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

	const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

	return (
		<div className="w-[52rem] p-8">
			<form action="" className="flex flex-col gap-2" onSubmit={enviarData}>
				<label className="w-full">
					<span className="text-start block text-sm font-medium text-gray-400">
						Sobre mi
					</span>
					<textarea
						value={formData?.desarrollador_descripcion}
						onChange={handleChange}
						placeholder="Escribe algo sobre ti"
						name="desarrollador_descripcion"
						className="block w-full h-[8rem] resize-none rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
					></textarea>
				</label>

				<button
					className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded">
					Guardar
				</button>
			</form>
		</div>
	);
};

export default ModalSobreMi;
