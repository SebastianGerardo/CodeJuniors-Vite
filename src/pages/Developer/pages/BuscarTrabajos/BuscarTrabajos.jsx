import './BuscarTrabajos.css'
import {ApiEmpresa} from '../../../../helpers/ApiUser'
import imagen_team from '../../../../assets/Developer/puesto_trabajos-team.svg';
import { useEffect, useState } from 'react';
import Propuesta from '../../components/Propuestas/Propuestas';
import Search from '../../components/Search/Search';
import close from '../../../../assets/Developer/close.svg'

const PuestosTrabajos = () => {
    const [ business, setBusiness ] = useState(ApiEmpresa);

// *******************************
    const [search,setSearch] = useState('')
    const [divSearch,setDivSearch] = useState([])

    const addSearch = () => {
        if(search === '') return
        setDivSearch([...divSearch, search])
        const filtrarData = business.filter(
            (i) =>
            i.puestos_trabajos[0].cargo_buscado.includes(search) ||
            i.puestos_trabajos[0].tipo_trabajo.includes(search) ||
            i.puestos_trabajos[0].tiempo_trabajo.includes(search) ||
            i.puestos_trabajos[0].nivel_dev.includes(search) ||
            i.puestos_trabajos[0].sueldo_trabajo.includes(search) ||
            i.puestos_trabajos[0].tecnologias[0].name.includes(search)
        )
        setSearch('')
        console.log(filtrarData)
        setBusiness(filtrarData)
        
    }
    

// *********************************
    
    return(
        <div className="puestos_trabajos">
            <div className="banner">
                <img src={imagen_team} alt="" className='banner-img' />
                <h1 className='banner-50'>Encuentra el empleo que se acomode mas a tus grandes habilidades</h1>
            </div>
            

            <div className="search_job">
                <div className='mb-5'>
                    <input type="text" className='search_job_-input' placeholder='Buscar Empleo' id='search-input' value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <button onClick={addSearch} className='btn-search transicion-escala'>Buscar</button>
                </div>
                <div id='search-div'>
                    { divSearch.length > 0 && divSearch.map((s,i) => (
                        <span key={i} className='search-filter'>{s}</span>
                    ))}
                </div>
            </div>
            

            <Propuesta business={business} />
        </div>
    )
}

export default PuestosTrabajos;