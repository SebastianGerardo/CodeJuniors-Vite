import { URL } from "./ApiUrl";

export const crearTecnologia = async(registro) => {
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
        return error;
    }
}

export const actualizarTecnologia = async(id, registro) => {
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
        return error;
    }
}

export const eliminarTecnologia = async(id, registro) => {
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
        return error;
    }
}