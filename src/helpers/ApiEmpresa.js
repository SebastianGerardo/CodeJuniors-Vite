import { URL } from "./ApiUrl";

export const actualizarEmpresa = async(id, registro) => {
    try {
        const fetchResponse = await fetch(`${URL}/empresa/${id}`,
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