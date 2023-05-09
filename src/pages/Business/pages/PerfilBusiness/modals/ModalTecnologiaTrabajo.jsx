import React, { useEffect, useState } from 'react'
import { Toast } from '../../../../../components/Alertas/Toast'
import { InputBasic } from '../../../../../components/Inputs/InputBasic'
import { actualizarTrabajo, actualizarTrabajoTecnologia, crearTrabajo, crearTrabajoTecnologia, eliminarTrabajo } from '../../../../../helpers/ApiTrabajos'
import removeIcon from '../../../../../assets/Icons/remove.svg'
import Swal from 'sweetalert2'
import { TraeTecnologias } from '../../../../../helpers/ApiCommon'
import Modal from '../../../../../components/Modal/Modal'

const ModalTecnologiaTrabajo = ({trabajoSeleccionado, handleRecargarTabla}) => {

    const [dataSeleccionada, setDataSeleccionada] = useState({})
    const [tecnologia, setTecnologia] = useState([])
    const [formData, setFormData] = useState({
        id_trabajos: trabajoSeleccionado.id_trabajos,
        id_tecnologia: dataSeleccionada?.id_tecnologia || "",
      })
    
      useEffect(() => {
        TraeTecnologias().then((res) => {
            setTecnologia(res.content)
        })
      }, [])

      useEffect(() => {
        setFormData({
            ...formData,
            id_tecnologia: dataSeleccionada?.id_tecnologia || "",
        })
        }, [dataSeleccionada])

      const validacionSeleccionado = Object.values(dataSeleccionada).length > 0 ? true : false
    
      const enviarData = (e) => {
        e.preventDefault()
        if(validacionSeleccionado) {
          actualizarTrabajoTecnologia(dataSeleccionada?.id_tecnologia ,formData).then((res) => {
            console.log(res)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Trabajo actualizado correctamente!'
              })
              handleRecargarTabla()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizar el trabajo'
              })
            }
          })
        } else {
        crearTrabajoTecnologia(formData).then((res) => {
            console.log(res)
            if (res.status == true) {
              Toast.fire({
                icon: 'success',
                title: 'Tecnología agregada correctamente!'
              })
              handleRecargarTabla()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al agregar la tecnologia'
              })
            }
          })
        }
      }
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: Number(e.target.value),
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
            eliminarTrabajo(dataSeleccionada?.id_trabajos).then((res) => {
              console.log(res)
              if(res.status == true) {
                Toast.fire({
                  icon: 'success',
                  title: 'Trabajo eliminado correctamente!'
                })
                handleRecargarTabla()
                handleCloseModal()
              } else {
                Toast.fire({
                  icon: 'error',
                  title: 'Ocurrió un error al eliminar el trabajo'
                })
              }
            })
          }
        })
      }


    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
     };
    
     const handleCloseModal = () => {
        setDataSeleccionada({});
       setIsOpen(false);
     };

    //  id_tecnologia

  return (
    <>
        <ul className='flex gap-4'>
            {trabajoSeleccionado.tbl_trabajos_tecnologia && trabajoSeleccionado.tbl_trabajos_tecnologia.length > 0 && trabajoSeleccionado.tbl_trabajos_tecnologia.map((red, index) => (
                <li onClick={() => {setDataSeleccionada(red), handleOpenModal()}} className='flex items-center justify-center' key={index}>
                    <div className='h-8 w-8'>
                        <img className='w-full h-full object-contain  red-icon-company' src={red.tbl_tecnologia?.tecnologia_imagen} alt=''/>
                    </div>
                </li>
            ))}
            <li onClick={handleOpenModal} className='flex items-center justify-center'><div className='add-social-company' >+</div></li>
        </ul>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <div className='w-[32rem] p-8 pt-4 flex flex-col gap-y-2'>
            <div className='flex justify-between items-center'>
                <span className='py-2 text-lg font-medium'>{validacionSeleccionado ? "Editar" : "Agregar"} tecnologia</span>
                {validacionSeleccionado && (
                <span onClick={eliminar} className='cursor-pointer'>
                    <img src={removeIcon} alt="" />
                </span>
                )}
            </div>
            <form action="" className='flex flex-col gap-4'>
                <label className="w-full">
                    <span className="text-start block text-sm font-medium text-gray-400">
                        Seleccione una tecnologia
                    </span>
                    <select
                        name={"id_tecnologia"}
                        onChange={handleChange}
                        value={formData.id_tecnologia}
                        className="block w-full  rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
                    >
                        <option value="1">Seleccione una tecnologia</option>
                        {tecnologia.map((tecnologia) => (
                        <option key={tecnologia.id_tecnologia} value={tecnologia.id_tecnologia}>{tecnologia.tecnologia_nombre}</option>
                        ))}
                    </select>
                </label>
                <div className='col-span-2 flex justify-center'>
                    <button
                    type='submit'
                    onClick={enviarData}
                    className="flex w-max gap-2 items-center cursor-pointer bg-[#E1F0FF] text-[#3699FF] hover:bg-[#3699FF] hover:text-white h-12 transition-all duration-150 font-medium py-2 px-4 rounded"
                    >
                    Guardar
                    </button>
                </div>
            </form>
            </div>
        </Modal>
    </>
  )
}

export default ModalTecnologiaTrabajo
