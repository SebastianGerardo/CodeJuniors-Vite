import React, { useState } from 'react'
import { Toast } from '../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../components/Inputs/InputBasic'
import { ActualizarTecnologiaDesarrollador, CrearTecnologiaDesarrollador, EliminarTecnologiaDesarrollador } from '../../../../helpers/ApiCommon'
import removeIcon from '../../../../assets/Icons/remove.svg'
import Swal from 'sweetalert2'

const ModalTecnologias = ({tecnologias, dataUsuario,tecnologiaSeleccionada,handleCloseModal,handleRecargarTabla}) => {

  const [formData, setFormData] = useState({
    id_tecnologia: tecnologiaSeleccionada?.id_tecnologia?.id_tecnologia || "",
    id_desarrollador: dataUsuario?.id_desarrollador,
  })

  console.log(tecnologiaSeleccionada)

  const validacionSeleccionado = Object.values(tecnologiaSeleccionada).length > 0 ? true : false

  const enviarData = (e) => {
      e.preventDefault()
      if(validacionSeleccionado) {
        ActualizarTecnologiaDesarrollador(tecnologiaSeleccionada?.idtbl_desarrollador_tecnologia ,formData).then((res) => {
          console.log(res)
          if (res.status == true) {
            Toast.fire({
              icon: 'success',
              title: 'Tecnologia actualizada correctamente!'
            })
            handleRecargarTabla()
            handleCloseModal()
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Ocurrió un error al actualizada la Tecnologia'
            })
          }
        })
      } else {
          CrearTecnologiaDesarrollador(formData).then((res) => {
          if (res.status == true) {
            Toast.fire({
              icon: 'success',
              title: 'Tecnologia agregada exitósamente!'
            })
            handleRecargarTabla()
            handleCloseModal()
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Ocurrió un error al agregar una tecnologia'
            })
          }
        })
      }
    }

    const eliminar = () => {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          EliminarTecnologiaDesarrollador(tecnologiaSeleccionada?.idtbl_desarrollador_tecnologia).then((res) => {
            console.log(res)
            if(res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Tecnologia eliminada correctamente!'
              })
              handleRecargarTabla()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al eliminar la Tecnologia'
              })
            }
          })
        }
      })
    }

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: Number(e.target.value),
      })
    }

  return (
    <div className='w-[52rem] p-8 pt-4 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
            <span className='py-2 text-lg font-medium'>{validacionSeleccionado ? "Editar" : "Crear"} Experiencia</span>
            {validacionSeleccionado && (
            <span onClick={eliminar} className='cursor-pointer'>
                <img src={removeIcon} alt="" />
            </span>
            )}
        </div>
        <form action="" className='grid grid-cols-1 gap-4'>
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
                <option value="1">Seleccione una tecnologia</option>
                {tecnologias.map((tecnologia) => (
                  <option key={tecnologia.id_tecnologia} value={tecnologia.id_tecnologia}>{tecnologia.tecnologia_nombre}</option>
                ))}
              </select>
            </label>
            
            <div className='col-span-2 flex justify-center'>
                <button
                onClick={enviarData}
                className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded"
                >
                Guardar
                </button>
            </div>
        </form>
    </div>
  )
}

export default ModalTecnologias
