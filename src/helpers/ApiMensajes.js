import { URL } from "./ApiUrl";

export const MensajeDesarrollador = async(mensaje) => {
    console.log(mensaje)
    try {
        const fetchResponse = await fetch(`${URL}/mensaje/desarrollador`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensaje)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const MensajeEmpresa = async(mensaje) => {
    console.log(mensaje)
    try {
        const fetchResponse = await fetch(`${URL}/mensaje/empresa`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensaje)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const CrearSala = async(mensaje) => {
    console.log(mensaje)
    try {
        const fetchResponse = await fetch(`${URL}/crear_sala`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensaje)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}