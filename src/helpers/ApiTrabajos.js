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