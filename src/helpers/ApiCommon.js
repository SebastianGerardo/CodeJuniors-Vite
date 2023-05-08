import { URL } from "./ApiUrl";

export const TraeTecnologias = async() => {
    try {
        const fetchResponse = await fetch(`${URL}/tecnologias`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const CrearTecnologiaDesarrollador = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_tecnologia`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

export const ActualizarTecnologiaDesarrollador = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_tecnologia/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

export const EliminarTecnologiaDesarrollador = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_tecnologia/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}


export const TraeRedes = async() => {
    try {
        const fetchResponse = await fetch(`${URL}/redes`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const CrearRedDesarrollador = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_redes`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}