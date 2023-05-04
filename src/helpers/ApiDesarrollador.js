import { URL } from "./ApiUrl";

export const crearEducacion = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_educacion`,
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

export const actualizarEducacion = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_educacion/${id}`,
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

export const eliminarEducacion = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_educacion/${id}`,
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