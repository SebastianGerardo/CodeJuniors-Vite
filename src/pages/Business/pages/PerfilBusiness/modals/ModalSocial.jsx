import React, { useState } from 'react'
import { Toast } from '../../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../../components/Inputs/InputBasic'
import { actualizarEmpresa } from '../../../../../helpers/ApiEmpresa'

const ModalSocial = (props) => {
    const [formData, setFormData] = useState({
        empresa_sector: props.dataUsuario.empresa_sector || "",
        empresa_ubicacion: props.dataUsuario.empresa_ubicacion || "",
      })
    
      const validacionSeleccionado = Object.values(props.dataSeleccionada).length > 0 ? true : false
    
      console.log(props.dataUsuario.id_empresa)

      const enviarData = (e) => {
        e.preventDefault()
          actualizarEmpresa(props.dataUsuario.id_empresa ,formData).then((res) => {
            console.log(res)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Empresa actualizada correctamente!'
              })
              props.handleRecargarTabla()
              props.handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizar la empresa'
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
            eliminarEducacion(props.dataSeleccionada?.id_educacion).then((res) => {
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
        <span className='py-2 text-lg font-medium'>Editar información adicional</span>
      </div>
      <form onSubmit={enviarData} action="" className='grid grid-cols-2 gap-4'>
          <InputBasic
            label='Sector'
            placeholder='Escribe el sector de la empresa'
            name='empresa_sector'
            value={formData?.empresa_sector}
            onChange={handleChange}
          />
          <InputBasic
            label='Ubicacion'
            placeholder='Escribe la ubicacion de la empresa'
            name='empresa_ubicacion'
            value={formData?.empresa_ubicacion}
            onChange={handleChange}
          />
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

export default ModalSocial
