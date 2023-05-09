import { useEffect, useState } from 'react';
import {ApiEmpresa} from '../../../../helpers/ApiUser'


const Search = () => {
    
    const [search,setSearch] = useState('')
    const [divSearch,setDivSearch] = useState([])

    const addSearch = () => {
        if(search === '') return
        setDivSearch([...divSearch, search])
        const filtrarData = ApiEmpresa.filter(
            (i) =>
            i.puestos_trabajos[0].cargo_buscado.includes(search) ||
            i.puestos_trabajos[0].tipo_trabajo.includes(search) ||
            i.puestos_trabajos[0].nivel_dev.includes(search) ||
            i.puestos_trabajos[0].sueldo_trabajo.includes(search) ||
            i.puestos_trabajos[0].tecnologias[0].name.includes(search)
        )
        setSearch('')
        
    }

    return (
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
    )
}

export default Search