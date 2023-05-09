import './BuscarTrabajos.css'
import {ApiEmpresa} from '../../../../helpers/ApiUser'
import imagen_team from '../../../../assets/Developer/puesto_trabajos-team.svg';
import { useEffect, useState } from 'react';
import Propuesta from '../../components/Propuestas/Propuestas';
import { Ping } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'
import {getTrabajos} from '../../../../helpers/ApiTrabajos'


const PuestosTrabajos = () => {
    const [ business, setBusiness ] = useState([]);
    const [ businessFilter, setBusinessFilter ] = useState([]);
    const [dataSeleccionada, setDataSeleccionada] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTrabajos().then((data) => {
            setLoading(false);
            setBusiness(data.content)
            setBusinessFilter(data.content)
            console.log("DATA QUE TU ESPERAS RODRIGO: ",data.content)
        })
    },[])

// *******************************
    const [search,setSearch] = useState('')
    const [divSearch,setDivSearch] = useState([])

    const addSearch = () => {
        if(search === '') return
        setDivSearch([...divSearch, search])
        const filtrarData = business.filter(
            (i) =>
            i.trabajos_cargo.includes(search) ||
            i.trabajos_modalidad.includes(search) ||
            i.trabajos_jornada.includes(search) ||
            i.trabajos_salario.includes(search) ||
            i.tbl_empresa.empresa_nombre.includes(search) ||
            i.tbl_empresa.empresa_ubicacion.includes(search) ||
            i.tbl_trabajos_tecnologia.some(
                (t) => t.tbl_tecnologia.tecnologia_nombre.includes(search)
              )
        )
        setSearch('')
        console.log(filtrarData)
        setBusiness(filtrarData)
        
    }

    const removeFilter = (filter) => {
        const newFilters = divSearch.filter((f) => f !== filter);
        setDivSearch(newFilters);
        try {
            const filteredData = businessFilter.filter((i) =>
              newFilters.every((filter) =>
                i.trabajos_cargo.includes(filter) ||
                i.trabajos_modalidad.includes(filter) ||
                i.trabajos_jornada.includes(filter) ||
                i.trabajos_salario.includes(filter) ||
                i.tbl_empresa.empresa_nombre.includes(filter) ||
                i.tbl_empresa.empresa_ubicacion.includes(filter)
              )
            );
            console.log("ESTE ES LA DATA CON EL TAG ELIMINADO: ",filteredData)
            setBusiness(filteredData);
        } catch (error) {
            console.log("ESTE ES EL ERROR: ",error)
        }
      };
    

// *********************************
    
    return(
        <>
            {
                loading ? (
                    <div className="puestos_trabajos flex justify-center items-center w-full h-screen">
                        <Ping/>
                    </div>
                ) 
                : 
                (
                    <AnimatePresence>
                        <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.3 }}
                        className="puestos_trabajos">
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
                                        <span key={i} className='search-filter cursor-pointer' onClick={() => removeFilter(s)}>{s}</span>
                                    ))}
                                </div>
                            </div>
                            

                            <Propuesta dataSeleccionada={dataSeleccionada} setDataSeleccionada={setDataSeleccionada} business={business} />
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </>
    )
}

export default PuestosTrabajos;