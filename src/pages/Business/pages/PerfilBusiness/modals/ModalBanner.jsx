import React, { useState } from 'react'
import { Toast } from '../../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../../components/Inputs/InputBasic'
import { actualizarEmpresa } from '../../../../../helpers/ApiEmpresa'

const ModalBanner = (props) => {
    const [formData, setFormData] = useState({
        empresa_foto: props.dataUsuario?.empresa_foto || "",
      })
    
      const enviarData = (e) => {
        e.preventDefault()
        
          actualizarEmpresa(props.dataUsuario?.id_empresa ,formData).then((res) => {
            console.log(res)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'La foto se actualizó correctamente!'
              })
              props.handleRecargarTabla()
              props.handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizar la foto'
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
    <div className='w-[52rem] p-8 pt-4 flex flex-col gap-y-2'>
      <div className='flex justify-between items-center'>
        <span className='py-2 text-lg font-medium'>{true ? "Editar" : "Crear"} educación</span>
      </div>
      <form onSubmit={enviarData} action="" className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'>
            <InputBasic
              label='Foto (URL)'
              placeholder='Ingresa la url de tu foto'
              name='empresa_foto'
              value={formData?.empresa_foto}
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

export default ModalBanner
