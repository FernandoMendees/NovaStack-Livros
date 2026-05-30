export async function registerClient(name, typeClient, acessCode, token) {
    const client = {
        name,
        typeClient,
        acessCode
    };

    try {
        const response = await fetch("http://localhost:8080/client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(client)
        });

        if (!response.ok) throw new Error(`Erro ao cadastrar cliente. Status [${response.status}].`);

        return await response.json();

    } catch (erro) {
        throw erro;
    }
}