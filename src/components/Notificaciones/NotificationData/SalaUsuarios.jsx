import React from 'react'

const SalaUsuarios = ({usuario, setDataSeleccionada, dataSeleccionada}) => {
  return (
    <ul>
      {
        usuario?.chat && usuario?.chat?.length > 0 && usuario?.chat?.map((item, index) => (
        <li onClick={() => setDataSeleccionada(item)} key={item.id_sala}>
          <section className={`links-notification cursor-pointer ${item.id_sala == dataSeleccionada?.id_sala ? "bg-[#2B63FD] text-white hover:bg-[#2B63FDCC]" : "" }`}>
            <div className='profile-jorge'>
              <img className='img-profile-jorge' src={item.tbl_desarrollador?.desarrollador_foto || item.tbl_empresa?.empresa_foto} alt=''/>
            </div>
            <div className='username-profile'>
              {item.tbl_desarrollador?.desarrollador_nombre.split(" ", 1) || item.tbl_empresa?.empresa_nombre.split(" ", 1)} {item.tbl_desarrollador?.desarrollador_apellido.split(" ", 1) || ""}
            </div>
          </section>
        </li>
        ))
      }
    </ul>
  )
}

export default SalaUsuarios
