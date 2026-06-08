export async function registerClient(name, typeClient, accessCode, token) {
    const client = {
        name,
        typeClient,
        accessCode
    };
    const response = await fetch("http://localhost:8080/client", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(client)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
}