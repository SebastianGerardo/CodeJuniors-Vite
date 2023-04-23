import { useEffect, useState } from "react";

const SobreMi = (props) => {
    const [ sob, setSob ] = useState([]);

    const fetchSob = () => {
        setSob(props.sob);
    }

    useEffect(()=>{
        fetchSob();
    },[props.sob,props.bio])

    return(
        <div className="about-me card">
            <h2 className="subtitle"><ion-icon name="person"></ion-icon> Sobre mi</h2>
            <p className="p">{props.bio}</p>
            {
                sob.length > 0 && sob.map((s)=>(
                    <a href={s.link} target="_blank" className="link"><ion-icon name={s.web}></ion-icon> @{s.name} </a>
                ))
            }
        </div>
    )
}

export default SobreMi;