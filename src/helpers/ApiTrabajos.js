import { URL } from "./ApiUrl";

export const getTrabajos = async(bearer) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const crearTrabajo = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos`,
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

export const actualizarTrabajo = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos/${id}`,
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

export const eliminarTrabajo = async(id) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const crearTrabajoTecnologia = async(registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos/tecnologia`,
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

export const actualizarTrabajoTecnologia = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos/tecnologia/${id}`,
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

export const eliminarTrabajoTecnologia = async(id) => {
    try {
        const fetchResponse = await fetch(`${URL}/trabajos/tecnologia/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}