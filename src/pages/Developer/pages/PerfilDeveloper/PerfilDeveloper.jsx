/*'use client'
import './PerfilDeveloper.css'
import { useEffect, useState } from "react"
//import { DataDevCom } from '../../../services/DataDevCom'
//import Tecnologias from '../../../components/DevelopersPage/perfil/Tecnologias'
//import Experiencia from '../../../components/DevelopersPage/perfil/Experiencia'
//import Educacion from '../../../components/DevelopersPage/perfil/Educacion'
//import SobreMi from '../../../components/DevelopersPage/perfil/SobreMi'
import InformacionDev from '../../../../components/DevelopersPage/perfil/InformacionDev'
import developer_perfil from '../../../../public/Developer/developer_perfil.svg'

const Perfildeveloper = () => {

    const [dev, setDev] = useState([]);
    const [tec, setTec] = useState([]);
    const [exp, setExp] = useState([]);
    const [edu, setEdu] = useState([]);
    const [sob, setSob] = useState([]);

    

    const fetchDev = async(developer) => {
        console.log(dv)
        const dataDev = await DataDevCom(dv, developer);
        console.log(dataDev[0]);
        setDev(dataDev[0]);
        setTec(dataDev[0].tecnologia);
        setExp(dataDev[0].experiencia);
        setEdu(dataDev[0].educacion);
        setSob(dataDev[0].redes);
    }

    useEffect( () => {
        fetchDev("developers");
    }, [] )

    return (
        <div className="container">
            <div className="header-dev">
                <h2 className='banner-h2'>Personaliza tu perfil con todas las habilidades tienes para mostrar</h2>
                <img src={developer_perfil} alt="" width={150} />
                <img src={dev.foto_perfil} alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <InformacionDev nombre={dev.nombre} apellido={dev.apellido} cargo={dev.cargo} telefono={dev.telefono} correo={dev.correo} />
                    <SobreMi bio={dev.biografia} sob={sob} />
                </div>
                <div className="col">
                    <Educacion educacion={edu} />
                    <Experiencia experiencia={exp} />
                    <Tecnologias tecnologia={tec} />
                </div>
            </div>
        </div>
    )
}

export default Perfildeveloper;*/