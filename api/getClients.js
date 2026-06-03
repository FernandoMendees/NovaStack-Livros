export async function getClients(token) {
    try {
        const response = await fetch("http://localhost:8080/client", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Erro ao buscar clientes");

        const data = await response.json()

        return await data;
        
    } catch(error) {
        throw error;
    }  
}

export async function clientNotBanned(token) {
    try {
        const response = await fetch("http://localhost:8080/client/notBanned", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error(`Não foi possível buscar os clientes. Status [${response.status}]`);

        const data = await response.json();

        return await data;

    } catch (error) {
        throw error;
    }
}