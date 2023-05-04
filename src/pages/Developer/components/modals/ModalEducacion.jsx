import React, { useState } from 'react'
import { Toast } from '../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../components/Inputs/InputBasic'
import { actualizarEducacion, crearEducacion, eliminarEducacion } from '../../../../helpers/ApiDesarrollador'
import removeIcon from '../../../../assets/Icons/remove.svg'
import Swal from 'sweetalert2'

const ModalEducacion = ({dataUsuario, educacionSeleccionada, handleCloseModal, handleRecargarTabla}) => {
  const [formData, setFormData] = useState({
    institucion: educacionSeleccionada?.educacion_institucion || "",
    carrera: educacionSeleccionada?.educacion_carrera || "",
    certificado: educacionSeleccionada?.educacion_certificado || "",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png",
    id_desarrollador: dataUsuario?.id_desarrollador,
  })

  const validacionSeleccionado = Object.values(educacionSeleccionada).length > 0 ? true : false

  const enviarData = (e) => {
    e.preventDefault()
    if(validacionSeleccionado) {
      actualizarEducacion(educacionSeleccionada?.id_educacion ,formData).then((res) => {
        console.log(res)
        if (res.status == true) {
          Toast.fire({
            icon: 'success',
            title: 'Educación actualizada correctamente!'
          })
          handleRecargarTabla()
          handleCloseModal()
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Ocurrió un error al actualizada la educación'
          })
        }
      })
    } else {
      crearEducacion(formData).then((res) => {
        console.log(res)
        if (res.status == true) {
          Toast.fire({
            icon: 'success',
            title: 'Educación creada correctamente!'
          })
          handleRecargarTabla()
          handleCloseModal()
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Ocurrió un error al crear la educación'
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
        eliminarEducacion(educacionSeleccionada?.id_educacion).then((res) => {
          console.log(res)
          if(res.status == true) {
            Toast.fire({
              icon: 'success',
              title: 'Educación eliminada correctamente!'
            })
            handleRecargarTabla()
            handleCloseModal()
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Ocurrió un error al eliminar la educación'
            })
          }
        })
      }
    })
  }

  return (
    <div className='w-[52rem] p-8 pt-4 flex flex-col gap-y-2'>
      <div className='flex justify-between items-center'>
        <span className='py-2 text-lg font-medium'>{validacionSeleccionado ? "Editar" : "Crear"} educación</span>
        {validacionSeleccionado && (
          <span onClick={eliminar} className='cursor-pointer'>
            <img src={removeIcon} alt="" />
          </span>
        )}
      </div>
      <form onSubmit={enviarData} action="" className='grid grid-cols-2 gap-4'>
          <InputBasic
            label='Institucion'
            placeholder='Escribe el nombre de la institución'
            name='institucion'
            value={formData?.institucion}
            onChange={handleChange}
          />
          <InputBasic
            label='Carrera'
            placeholder='Escribe la carrera que estudió'
            name='carrera'
            value={formData?.carrera}
            onChange={handleChange}
          />
          <div className='col-span-2'>
            <InputBasic
              label='Certificado (opcional)'
              placeholder='Ingresa la url de tu certificado'
              name='certificado'
              value={formData?.certificado}
              onChange={handleChange}
            />
          </div>
          <div className='col-span-2 flex justify-center'>
            <button
            className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded"
            >
              Guardar
            </button>
          </div>
      </form>
    </div>
  )
}

export default ModalEducacion
