export async function getClients(token) {

    const response = await fetch("http://localhost:8080/client", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar clientes");
    }

    return await response.json();
}