import { URL } from "./ApiUrl";

export const LoginDesarrollador = async(login) => {
    try {
        const fetchResponse = await fetch(`${URL}/auth/login`,
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
        const fetchResponse = await fetch(`${URL}/auth/verify`,
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