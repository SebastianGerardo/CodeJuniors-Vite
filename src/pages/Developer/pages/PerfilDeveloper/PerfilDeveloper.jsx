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
import { Ping } from "@uiball/loaders";
import { AnimatePresence, motion } from 'framer-motion'

const Perfildeveloper = () => {

    const {usuarioLogin} = useContext(UserContext)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

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
        <>
            {loading ? (
                    <div className="container mx-auto">
                    <div className="w-full flex justify-center items-center h-screen">
                        <Ping/>
                    </div>
                    </div>
                ) : (
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.3 }}
                        className="container mx-auto"
                        >
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
                        </motion.div>
                    </AnimatePresence>
                )}
        
        </>
    )
}

export default Perfildeveloper;