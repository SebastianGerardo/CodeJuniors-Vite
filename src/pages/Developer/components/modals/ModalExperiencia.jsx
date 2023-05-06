import React, { useState } from 'react'
import { InputBasic } from '../../../../components/Inputs/InputBasic'
import removeIcon from '../../../../assets/Icons/remove.svg'
import { actualizarExperiencia, crearExperiencia, eliminarExperiencia } from '../../../../helpers/ApiExperiencia'

const ModalExperiencia = ({dataUsuario,experienciaSeleccionada}) => {

    const [formData, setFormData] = useState({
        empresa: experienciaSeleccionada?.experiencia_empresa || "",
        cargo: experienciaSeleccionada?.experiencia_cargo || "",
        fecha_inicio: experienciaSeleccionada?.experiencia_finicio || "",
        logo: "https://cdn-icons-png.flaticon.com/512/4091/4091450.png",
        id_desarrollador: dataUsuario?.id_desarrollador,
    })

    const validacionSeleccionado = Object.values(experienciaSeleccionada).length > 0 ? true : false

    const enviarData = (e) => {
        e.preventDefault()
        if(validacionSeleccionado) {
            actualizarExperiencia(experienciaSeleccionada?.id_experiencia ,formData).then((res) => {
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
            eliminarExperiencia(experienciaSeleccionada?.id_experiencia).then((res) => {
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

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
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
            <form onSubmit={enviarData} action="" className='grid grid-cols-2 gap-4'>
                <InputBasic
                    label='Nombre de la Empresa'
                    placeholder='Escribe el nombre de la Empresa'
                    name='empresa'
                    value={formData?.empresa}
                    onChange={handleChange}
                />
                <InputBasic
                    label='Cargo que desempeñó'
                    placeholder='Escribe el cargo que desempeñó'
                    name='cargo'
                    value={formData?.cargo}
                    onChange={handleChange}
                />
                <div>
                    <InputBasic
                    label='logo de la empresa'
                    placeholder='Ingresa el url logo de la empresa'
                    name='logo'
                    value={formData?.logo}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <InputBasic
                    label='Fecha de inicio'
                    placeholder='Ingresa la fecha de inicio'
                    type='date'
                    name='fecha_inicio'
                    value={formData?.fecha_inicio}
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

export default ModalExperiencia
