import React, { useContext, useState } from 'react'
import PerfilBannerCompany from './components/PerfilBannerCompany/PerfilBannerCompany';
import PerfilJobsCompany from './components/PerfilJobsCompany/PerfilJobsCompany';
import PerfilMainCompany from './components/PerfilMainCompany/PerfilMainCompany';
import PerfilSocialCompany from './components/PerfilSocialCompany/PerfilSocialCompany';
import './PerfilBusiness.css'
import { ApiUsuarioInfoEmpresa } from '../../../../helpers/ApiUser';
import { UserContext } from '../../../../context/ContextPage';

export default function PerfilBusiness() {

  const [ dataEmp, setDataEmp ] = useState(ApiUsuarioInfoEmpresa);

  const {usuarioLogin, handleRecargarTabla} = useContext(UserContext)

  console.log(usuarioLogin)

  const propsData = {
    dataUsuario: usuarioLogin,
    handleRecargarTabla: handleRecargarTabla
  }
  
  return (
    <div className='company'>
      <section className='perfil-company'>
        
        <PerfilBannerCompany {...propsData} nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa}/>

        <section className='about-company'>
          <div className='section-company_left'>
            <section className='main-company-box'>
              <PerfilMainCompany {...propsData} descripcionEmpresa={dataEmp.biografia}  />
            </section>

            <section className='jobs-company-section'>
              <PerfilJobsCompany {...propsData} puestosEmpresa={dataEmp.puestos_trabajos} nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa} />
            </section>
          </div>

          <div className='section-company_right'>
            <section className='perfil-social-company'>
              <PerfilSocialCompany {...propsData} redesEmpresa={dataEmp.redes} sectorEmpresa={dataEmp.sector} departamentoEmpresa={dataEmp.departamento}/>
            </section>
          </div>

        </section>

      </section>
    </div>
  )
}
