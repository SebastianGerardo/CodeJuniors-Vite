import React, { useState } from 'react'
import { Toast } from '../../../../components/Alertas/Toast'
import Swal from 'sweetalert2'
import { InputBasic } from '../../../../components/Inputs/InputBasic'
import removeIcon from '../../../../assets/Icons/remove.svg'
import { actualizarExperiencia, crearExperiencia, eliminarExperiencia } from '../../../../helpers/ApiExperiencia'

const ModalExperiencia = ({dataUsuario,experienciaSeleccionada,handleCloseModal,handleRecargarTabla}) => {

    const [formData, setFormData] = useState({
        empresa: experienciaSeleccionada?.experiencia_empresa || "",
        cargo: experienciaSeleccionada?.experiencia_cargo || "",
        fecha_inicio: experienciaSeleccionada?.experiencia_finicio || "",
        fecha_fin: experienciaSeleccionada?.experiencia_ffin || "",
        logo: experienciaSeleccionada?.experiencia_logo || "",
        id_desarrollador: dataUsuario?.id_desarrollador,
    })

    console.log(experienciaSeleccionada)

    const validacionSeleccionado = Object.values(experienciaSeleccionada).length > 0 ? true : false

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
            <form action="" className='grid grid-cols-2 gap-4'>
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
                    label='Fecha de inicio'
                    placeholder='Ingresa la fecha de inicio'
                    type='date'
                    name='fecha_inicio'
                    value={formData?.fecha_inicio}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <InputBasic
                    label='Fecha de fin'
                    placeholder='Ingresa la fecha de fin'
                    type='date'
                    name='fecha_fin'
                    value={formData?.fecha_fin}
                    onChange={handleChange}
                    />
                </div>
                <div className='col-span-2'>
                    <InputBasic
                    label='logo de la empresa'
                    placeholder='Ingresa el url logo de la empresa'
                    name='logo'
                    value={formData?.logo}
                    onChange={handleChange}
                    />
                </div>
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

export default ModalExperiencia
