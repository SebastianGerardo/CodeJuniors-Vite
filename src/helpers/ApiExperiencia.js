import { URL } from "./ApiUrl";

export const crearExperiencia = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_experiencia`,
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

export const actualizarExperiencia = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_experiencia/${id}`,
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

export const eliminarExperiencia = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador_experiencia/${id}`,
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