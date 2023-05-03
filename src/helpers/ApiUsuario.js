import { URL } from "./ApiUrl";

export const LoginDesarrollador = async(login) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const verificarDesarrollador = async(bearer) => {
    try {
        const fetchResponse = await fetch(`${URL}/desarrollador`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearer}`
            },
        })
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}