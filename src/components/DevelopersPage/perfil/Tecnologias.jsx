import { useEffect, useState } from "react";

const Tecnologias = (props) => {
    const [ array, setArray ] = useState([]);

    const fetchTec = () => {
        setArray(props.tecnologia)
    }

    useEffect(()=>{
        fetchTec()
    }, [props.tecnologia] )

    return (
        <>
            <div className="skills card">
                <h2 className="subtitle"><ion-icon name="build"></ion-icon> Tecnologias Dominadas</h2>
                <div className="skills-icon">
                    {
                        array.map((t)=>(
                            <img key={t.icon} src={t.icon} alt={t.name} className="img-skill" />    
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Tecnologias;