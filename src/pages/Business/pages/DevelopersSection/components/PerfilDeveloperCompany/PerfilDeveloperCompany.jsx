

import  "../../../../pages/Developers/Perfil/Perfil.css"
import { useEffect, useState } from "react"
import { DataDevCom } from "../../../../services/DataDevCom"
import { useParams } from 'react-router-dom'
import InformacionDeveloper from "../../../../components/CompanyPage/Developers/Perfil/InformacionDevCompany"
import SobreMi from "../../../DevelopersPage/perfil/SobreMi"
import Experiencia from "../../../DevelopersPage/perfil/Experiencia"
import Tecnologias from "../../../DevelopersPage/perfil/Tecnologias"
import Educacion from "../../../DevelopersPage/perfil/Educacion"

const PerfilDeveloperCompany = (props) => {
    const [ dev, setDev ] = useState([])
    const [tec, setTec] = useState([]);
    const [exp, setExp] = useState([]);
    const [edu, setEdu] = useState([]);
    const [sob, setSob] = useState([]);

    
    
    const { dv } = useParams();

    const fetchDev = async(id, developer) => {
        const dataDev = await DataDevCom(id, developer);

        console.log(dataDev[0]);

        setDev(dataDev[0]);
        setTec(dataDev[0].tecnologia);
        setExp(dataDev[0].experiencia);
        setEdu(dataDev[0].educacion);
        setSob(dataDev[0].redes);
    }

    useEffect( () => {
        fetchDev(props.email, "developers");
    }, [props.email] )

    // const fetchDev = async(id, dev) => {
    //     const dataDev = await DataComDev2(id, dev);
    //     setDev(dataDev);
    //     setTec(dataDev.tecnologia);
    //     setExp(dataDev.experiencia);
    //     setEdu(dataDev.educacion);
    //     setSob(dataDev.redes);
    // }

    // useEffect( () => {
    //     fetchDev("developers", 1);
    //     console.log(props.id)
    // }, [props.id] )

    // useEffect( () => {
    //     fetchDev("developers");
    // }, [] )

    return (
        <div className="container">
            <div className="header-dev">
                <img src={dev.foto_perfil} alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <InformacionDeveloper nombre={dev.nombre} apellido={dev.apellido} cargo={dev.cargo} telefono={dev.telefono} correo={dev.correo}/>
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

export default PerfilDeveloperCompany;