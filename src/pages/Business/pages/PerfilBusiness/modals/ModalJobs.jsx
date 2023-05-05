import React, { useState } from 'react'
import { InputBasic } from '../../../../../components/Inputs/InputBasic'

const ModalJobs = (props) => {
    const [formData, setFormData] = useState({
        cargo: props.dataSeleccionada?.trabajos_cargo || "",
        modalidad: props.dataSeleccionada?.trabajos_modalidad || "",
        jornada: props.dataSeleccionada?.trabajos_jornada || "",
        salario: props.dataSeleccionada?.trabajos_salario || "",
        publicado: new Date(),
        id_empresa: "",
      })
    
      const validacionSeleccionado = Object.values(props.dataSeleccionada).length > 0 ? true : false
    
      const enviarData = (e) => {
        e.preventDefault()

        // if(validacionSeleccionado) {
        //   actualizarEducacion(educacionSeleccionada?.id_educacion ,formData).then((res) => {
        //     console.log(res)
        //     if (res.status == true) {
        //       Toast.fire({
        //         icon: 'success',
        //         title: 'Educación actualizada correctamente!'
        //       })
        //       handleRecargarTabla()
              console.log(props.dataSeleccionada)
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
        <span className='py-2 text-lg font-medium'>{validacionSeleccionado ? "Editar" : "Agregar"} puesto de trabajo</span>
        {/* {validacionSeleccionado && (
          <span onClick={eliminar} className='cursor-pointer'>
            <img src={removeIcon} alt="" />
          </span>
        )} */}
      </div>
      <form onSubmit={enviarData} action="" className='grid grid-cols-2 gap-4'>
          <InputBasic
            label='Modalidad'
            placeholder='Escribe la modalidad del puesto de trabajo'
            name='modalidad'
            value={formData?.modalidad}
            onChange={handleChange}
          />
          <InputBasic
            label='Cargo'
            placeholder='Escribe el cargo del puesto de trabajo'
            name='cargo'
            value={formData?.cargo}
            onChange={handleChange}
          />
          <InputBasic
            label='Salario'
            placeholder='Escribe el salario del puesto de trabajo'
            name='salario'
            value={formData?.salario}
            onChange={handleChange}
          />
          <InputBasic
            label='Jornada'
            placeholder='Escribe la jornada del puesto de trabajo'
            name='jornada'
            value={formData?.jornada}
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

export default ModalJobs
