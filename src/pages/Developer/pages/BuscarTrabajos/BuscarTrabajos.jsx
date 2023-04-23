import './BuscarTrabajos.css'
import {ApiEmpresa} from '../../../../helpers/ApiUser'
import imagen_team from '../../../../assets/Developer/puesto_trabajos-team.svg';
import { useEffect, useState } from 'react';
import Propuesta from '../../components/Propuestas/Propuestas';
// import Propuesta from '../../../../components/DevelopersPage/PropuestasTrabajos/Propuesta';
/*import { DataComDev } from '../../../services/Company/DataComDevs';*/

const PuestosTrabajos = () => {
    const [ business, setBusiness ] = useState(ApiEmpresa);

    const [search,setSearch] = useState([])

    const addSearch = () => {
        const divSeach = document.createElement('div')
        divSeach.className = 'search-filter'
        divSeach.innerHTML = search
        const searchDiv = document.getElementById('search-div')
        searchDiv.appendChild(divSeach)
        const searchInput = document.getElementById('search-input')
    }
    
    return(
        <div className="puestos_trabajos">
            <div className="banner">
                <img src={imagen_team} alt="" className='banner-img' />
                <h1 className='banner-50'>Encuentra el empleo que se acomode mas a tus grandes habilidades</h1>
            </div>
            <div className="search_job">
                <input type="text" className='search_job_-input' placeholder='Buscar Empleo' id='search-input' onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={addSearch}>add</button>
                <div id='search-div'></div>
            </div>
            {/* <Propuesta business={business} /> */}
            <Propuesta business={business} />
        </div>
    )
}

export default PuestosTrabajos;