import { useEffect, useState } from "react";

const Experiencia = (props) => {

    const [ exp, setExp ] = useState([]);

    const fetchExp = () => {
        setExp(props.experiencia);
    }
    useEffect( ()=>{
        fetchExp()
    }, [props.experiencia] )

    return (
        <div className="my-experience card mb">
            <h2 className="subtitle"><ion-icon name="bag"></ion-icon> Mi Experiencia</h2>
            {
                exp.length > 0 && exp.map((e)=>(
                    <div className="business">
                        <div className="business-info">
                            <div className="business-name">
                                <h3 key={e.name_biss}><ion-icon name="business"></ion-icon> {e.name_biss}</h3>
                                <p className="p"><ion-icon name="calendar"></ion-icon> {e.rang_fecha}</p>
                            </div>
                            <p className="p">{e.cargo}</p>
                        </div>
                        <img src={e.logo_biss} alt="" className="photo-business" height={57} width={57} />
                    </div>
                ))
            }
        </div>
    )
}

export default Experiencia;