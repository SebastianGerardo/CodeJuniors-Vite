import { useEffect, useState } from "react";

const Educacion = (props) => {
    const [edu, setEdu] = useState([]);

    const fetchEdu = () => {
        setEdu(props.educacion);
    }

    useEffect(()=>{
        fetchEdu();
    }, [props.educacion])

    return (
        <div className="education card mt mb">
            <h2 className="subtitle"><ion-icon name="school"></ion-icon> Educacion</h2>
            <div className="my-education">
                {
                    edu.length > 0 && edu.map((e)=>(
                        <div className="institution">
                            <img src={e.logo_ins} alt="" width={66} height={66} />
                            <div className="institution-text">
                                <p>{e.nombre_ins}</p>
                                <p>{e.carrera}</p>
                            </div>
                            <img src={e.certificado} alt="" width={70}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Educacion;