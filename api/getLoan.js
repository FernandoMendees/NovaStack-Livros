export async function getLoan(token) {
    try {
        const response = await fetch("http://localhost:8080/loan", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Não foi possivel carregar os itens.");

        const data = await response.json();

        return await data;
        
    } catch (erro) {
        throw erro;
    }
}