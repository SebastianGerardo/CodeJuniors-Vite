import './PerfilDeveloper.css'
import { useContext, useEffect, useState } from "react"

import {ApiDeveloper} from '../../../../helpers/ApiDeveloper'
import Tecnologias from '../../components/perfil/Tecnologias'
import Experiencia from '../../components/perfil/Experiencia'
import Educacion from '../../components/perfil/Educacion'
import SobreMi from '../../components/perfil/SobreMi'
import InformacionDev from '../../components/perfil/InformacionDev'
import developer_perfil from '../../../../assets/Developer/developer_perfil.svg'
import { UserContext } from '../../../../context/ContextPage'

const Perfildeveloper = () => {

    const {usuarioLogin} = useContext(UserContext)

    const [dev, setDev] = useState([]);
    const [tec, setTec] = useState([]);
    const [exp, setExp] = useState([]);
    const [edu, setEdu] = useState([]);
    const [sob, setSob] = useState([]);

    const fetchDev = async() => {
        setDev(ApiDeveloper[0]);
        setTec(ApiDeveloper[0].tecnologia);
        setExp(ApiDeveloper[0].experiencia);
        setEdu(ApiDeveloper[0].educacion);
        setSob(ApiDeveloper[0].redes);
    }

    useEffect( () => {
        fetchDev("developers");
    }, [] )

    return (
        <div className="container mx-auto">
            <div className="header-dev">
                <h2 className='banner-h2'>Personaliza tu perfil con todas las habilidades tienes para mostrar</h2>
                <img src={developer_perfil} alt="" width={150} />
                <img src={dev.foto_perfil} alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <InformacionDev dataUsuario={usuarioLogin} />
                    <SobreMi dataUsuario={usuarioLogin} bio={dev.biografia} sob={sob} />
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

export default Perfildeveloper;