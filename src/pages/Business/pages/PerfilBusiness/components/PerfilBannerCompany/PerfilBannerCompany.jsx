import React from 'react'
import './PerfilBannerCompany.css'
// import bannerCompanyDefault from '../../../../assets/Perfil/banner-company-default.jpg'

export default function PerfilBannerCompany(props) {
  return (
      <section className='perfil-company'>
        <div className='company__banner'>
          <h1 className="logo logo-banner-company">Dev<span className="logo-extend logo-extend_banner ">Juniors</span></h1>
          <div className='company_info'>
            <div className='company__info-img'>
              <img src={props.logoEmpresa} alt=''/>
            </div>
            <h1 className='company__info-name'>{props.nombreEmpresa}</h1>
          </div>
        </div>
        {/* <div className='company__description'> */}
          {/* In progress...

          <div className='company_share'>
            <a href='.'>Compartir</a>
          </div>
           
          */}
        {/* </div> */}
      </section>
  )
}
