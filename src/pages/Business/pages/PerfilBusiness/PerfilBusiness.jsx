import React, { useState } from 'react'
import PerfilBannerCompany from './components/PerfilBannerCompany/PerfilBannerCompany';
import PerfilJobsCompany from './components/PerfilJobsCompany/PerfilJobsCompany';
import PerfilMainCompany from './components/PerfilMainCompany/PerfilMainCompany';
import PerfilSocialCompany from './components/PerfilSocialCompany/PerfilSocialCompany';
import './PerfilBusiness.css'
import { ApiUsuarioInfoEmpresa } from '../../../../helpers/ApiUser';

export default function PerfilBusiness() {

  const [ dataEmp, setDataEmp ] = useState(ApiUsuarioInfoEmpresa);

//   const fetchDataEmp = async(data) => {
//     const response = await DataDevCom(mn, data)
//     setDataEmp(response[0]);
//   }

//   useEffect(() => {
//     fetchDataEmp("business")
//   }, [])
  
  return (
    <div className='company'>
      <section className='perfil-company'>
        
        <PerfilBannerCompany nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa}/>

        <section className='about-company'>
          <div className='section-company_left'>
            <section className='main-company-box'>
              <PerfilMainCompany descripcionEmpresa={dataEmp.biografia}  />
            </section>

            <section className='jobs-company-section'>
              <PerfilJobsCompany puestosEmpresa={dataEmp.puestos_trabajos} nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa} />
            </section>
          </div>

          <div className='section-company_right'>
            <section className='perfil-social-company'>
              <PerfilSocialCompany redesEmpresa={dataEmp.redes} sectorEmpresa={dataEmp.sector} departamentoEmpresa={dataEmp.departamento}/>
            </section>
          </div>

        </section>

      </section>
    </div>
  )
}
