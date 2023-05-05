import React, { useState } from 'react'
import { Toast } from '../../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../../components/Inputs/InputBasic'
import { actualizarEducacion, crearEducacion, eliminarEducacion } from '../../../../../helpers/ApiDesarrollador'
import removeIcon from '../../../../../assets/Icons/remove.svg'
import Swal from 'sweetalert2'

const ModalMain = ({dataUsuario, dataSeleccionada, handleCloseModal, handleRecargarTabla}) => {
  const [formData, setFormData] = useState({
    empresa_nombre: "",
    empresa_razon_social: "",
    empresa_ruc: "",
    empresa_telefono: "",
    empresa_encargado: "",
    empresa_descripcion: "",
  })

//   const validacionSeleccionado = Object.values(dataSeleccionada).length > 0 ? true : false

  const enviarData = (e) => {
    e.preventDefault()
    // if(validacionSeleccionado) {
    //   actualizarEducacion(dataSeleccionada?.id_educacion ,formData).then((res) => {
    //     console.log(res)
    //     if (res.status == true) {
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Educación actualizada correctamente!'
    //       })
    //       handleRecargarTabla()
          handleCloseModal()
    //     } else {
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Ocurrió un error al actualizada la educación'
    //       })
    //     }
    //   })
    // } else {
    //   crearEducacion(formData).then((res) => {
    //     console.log(res)
    //     if (res.status == true) {
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Educación creada correctamente!'
    //       })
    //       handleRecargarTabla()
    //       handleCloseModal()
    //     } else {
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Ocurrió un error al crear la educación'
    //       })
    //     }
    //   })
    // }
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
        eliminarEducacion(dataSeleccionada?.id_educacion).then((res) => {
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
        <span className='py-2 text-lg font-medium'>Información de la empresa</span>
        {/* {validacionSeleccionado && (
          <span onClick={eliminar} className='cursor-pointer'>
            <img src={removeIcon} alt="" />
          </span>
        )} */}
      </div>
      <form onSubmit={enviarData} action="" className='grid grid-cols-3 gap-4'>
            {/* <div className='col-span-2 grid grid-cols-[30%_70%] gap-2'> */}
            <InputBasic
              label="Nombre de la empresa"
              type = "text"
              name = "empresa_nombre"
              placeholder = "Nombre de la empresa"
              onChange = {handleChange}
              value = {formData?.empresa_nombre}
            />
            <div className='col-span-2'>
              <InputBasic
                label="Razón social de la empresa"
                type = "text"
                name = "empresa_razon_social"
                placeholder = "Razón social de la empresa"
                onChange = {handleChange}
                value = {formData?.empresa_razon_social}
              />

            </div>
            {/* </div> */}
            <InputBasic
              label="Ruc de la empresa"
              type = "text"
              name = "empresa_ruc"
              placeholder = "Ruc de la empresa"
              onChange = {handleChange}
              value = {formData?.empresa_ruc}
            />
            <InputBasic
              label="Teléfono del encargado"
              type = "text"
              name = "empresa_telefono"
              placeholder = "Teléfono del encargado"
              onChange = {handleChange}
              value = {formData?.empresa_telefono}
            />
            <InputBasic
              label="Encargado de la empresa"
              type = "text"
              name = "empresa_encargado"
              placeholder = "Encargado de la empresa"
              onChange = {handleChange}
              value = {formData?.empresa_encargado}
            />
            
            <div className='col-span-3'>
              <label className="w-full">
                <span className="text-start block text-sm font-medium text-gray-400">
                    Descripcion
                </span>
                <textarea
                  value={formData?.empresa_descripcion}
                  name="empresa_descripcion"
                  className="block w-full h-[8rem] resize-none rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
                />
              </label>
            </div>
          <div className='col-span-3 flex justify-center'>
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

export default ModalMain
